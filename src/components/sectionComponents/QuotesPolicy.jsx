import React from "react";
import "../css/style.css";

// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import useStyles from "../css/QuotesPolicyStyle";

// Material-UI Components
import { Typography, Grid } from "@material-ui/core";

// Icons & Media
import FlightIcon from "@material-ui/icons/Flight";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";

const QuotesPolicy = () => {
  const classes = useStyles();
  const policies = [
    {
      id: 1,
      name: "FREE SHIPPING WORLD WIDE",
      icon: <FlightIcon className={classes.policyIcon} />,
    },
    {
      id: 2,
      name: "100% MONEY BACK GUARANTEE",
      icon: <LocalAtmIcon className={classes.policyIcon} />,
    },
    {
      id: 3,
      name: "MANY PAYMENT GATEWAYS",
      icon: <CreditCardIcon className={classes.policyIcon} />,
    },
    {
      id: 4,
      name: "24/7 ONLINE SUPPORT",
      icon: <HeadsetMicOutlinedIcon className={classes.policyIcon} />,
    },
  ];

  return (
    <>
      {/* Policy Section */}
      <Grid container className={classes.policyGridBox}>
        <Grid container>
          {[...policies].map((policy) => {
            return (
              <>
                <Grid
                  item
                  lg={3}
                  xs={6}
                  align="center"
                  className={classes.policyBox}
                  key={policy.id}
                >
                  <Typography className={classes.policyIconBox}>
                    <span className={classes.policyIconSpan}>
                      {policy.icon}
                    </span>
                  </Typography>
                  <Typography className={classes.policyName}>
                    {policy.name}
                  </Typography>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>

      {/* Quotes Section */}
      {/* <Grid
        container
        direction="row"
        justifyContent="center"
        className={classes.quotesGridBox}
      >
        <AliceCarousel
          autoPlay
          animationDuration="1000"
          disableButtonsControls="false"
          autoPlayInterval={2000}
          responsive={{
            1900: {
              items: 4,
            },
          }}
          mouseTracking="false"
          items={[1,1,1].map((newsfeed) => {
            return (
              <>
                <Grid item>

                </Grid>
              </>
            );
          })}
        />
      </Grid> */}
    </>
  );
};

export default QuotesPolicy;
