import React, { useState, useEffect } from "react";
import useStyles from "../../css/CheckoutFormStyle";

// Commerce.js Instance
import { commerce } from "../../../lib/commerce";

// Custom Checkout Components
import AddressForm from "./CheckoutForm/AddressForm";
import PaymentForm from "./CheckoutForm/PaymentForm";
import Confirmation from "./CheckoutForm/Confirmation";
import YourOrders from "./CheckoutForm/YourOrders";

// Material-UI Components
import { Grid, Paper, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const classes = useStyles();
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        shippingData={shippingData}
        nextStep={nextStep}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  useEffect(() => {
    /** GENERATE TOKEN */
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (e) {
        console.log(e);
      }
    };
    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  return (
    <>
      <main className={classes.layout}>
        <Grid container justifyContent="center" spacing={3}>
          {/* Checkout Form */}
          <Grid
            item
            xs={12}
            sm={7}
            order={{ xs: 2, sm: 1 }}
            style={{ marginBottom: 35 }}
          >
            <Paper className={classes.paper}>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {[...steps].map((step) => {
                  return (
                    <Step key={step}>
                      <StepLabel>{step}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <Confirmation />
              ) : checkoutToken ? (
                <Form />
              ) : (
                ``
              )}
            </Paper>
          </Grid>

          {/* Your Orders */}
          <Grid item xs={12} sm={5} order={{ xs: 1, sm: 2 }}>
            <YourOrders checkoutToken={checkoutToken} />
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Checkout;
