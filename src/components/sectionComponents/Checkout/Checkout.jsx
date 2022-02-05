import React, { useState, useEffect } from "react";
import useStyles from "../../css/CheckoutFormStyle";

// Commerce.js Instance
import { commerce } from "../../../lib/commerce";

// Custom Checkout Components
import AddressForm from "./CheckoutForm/AddressForm";
import PaymentForm from "./CheckoutForm/PaymentForm";
import Confirmation from "./CheckoutForm/Confirmation";

// Material-UI Components
import { Paper, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart }) => {
  const classes = useStyles();
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );

  useEffect(() => {
    setActiveStep(0);
  }, []);

  useEffect(() => {
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

  return (
    <main className={classes.layout}>
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
    </main>
  );
};

export default Checkout;
