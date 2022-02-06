import React, { useState, useEffect } from "react";
import useStyles from "../../../css/CheckoutFormStyle";
import { Link } from "react-router-dom";

// Material-UI Components
import { InputLabel, Select, MenuItem, Button, Grid } from "@mui/material";

// Commerce.js Instance
import { commerce } from "../../../../lib/commerce";

// CustomTextField
import FormInput from "./CustomTextField";

// React-Hook-Form
import { useForm, FormProvider } from "react-hook-form";

const AddressForm = ({ checkoutToken, next }) => {
  const classes = useStyles();
  const methods = useForm();

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const fetchShippingCountries = async (cTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      cTokenId
    );
    setShippingCountries(countries);
    setShippingCountry("IN");
    // Will give first country code -> Object.keys(countries)[0]
  };

  const fetchSubdivisions = async (cTokenId, countryId) => {
    const { subdivisions } =
      await commerce.services.localeListShippingSubdivisions(
        cTokenId,
        countryId
      );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (cTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(cTokenId, {
      country,
      region,
    });
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  // First get Country then Subdivision then ShippingOption
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(checkoutToken.id, shippingCountry);
  }, [checkoutToken, shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [checkoutToken, shippingCountry, shippingSubdivision]);

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            {/* Input Fields */}
            <FormInput name="firstName" label="First Name" />
            <FormInput name="lastName" label="Last Name" />
            <FormInput name="address" label="Address" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="Zip / Postal Code" />

            {/* Shipping Countries */}
            <Grid item xs={12} sm={6}>
              <InputLabel className={classes.selectLabel}>
                Shipping Countries *
              </InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
                variant="standard"
                required
              >
                {Object.entries(shippingCountries).map(([code, name]) => {
                  return (
                    <MenuItem key={code} value={code}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>

            {/* Shipping Subdivisions */}
            <Grid item xs={12} sm={6}>
              <InputLabel className={classes.selectLabel}>
                Shipping Subdivisions *
              </InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
                variant="standard"
                required
              >
                {Object.entries(shippingSubdivisions).map(([code, name]) => {
                  return (
                    <MenuItem key={code} value={code}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>

            {/* Shipping Options */}
            <Grid item xs={12} sm={6} style={{ marginBottom: 15 }}>
              <InputLabel className={classes.selectLabel}>
                Shipping Options *
              </InputLabel>
              <Select
                value={shippingOption}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
                variant="standard"
                required
              >
                {[...shippingOptions].map((option) => {
                  return (
                    <MenuItem key={option.id} value={option.id}>
                      {option.description} -{" "}
                      {option.price.formatted_with_symbol}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
          </Grid>

          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              to="/cart"
              variant="outlined"
              className={classes.backBtn}
            >
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
