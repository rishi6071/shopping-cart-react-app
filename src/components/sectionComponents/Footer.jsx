import React from "react";
import useStyles from "../css/FooterStyle";
import '../css/style.css';

// Material-UI Components
import { Grid, Typography } from "@material-ui/core";

// Icons & Media
import FlightIcon from "@material-ui/icons/Flight";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";

const Footer = () => {
  const classes = useStyles();
  const policies = [
    {
      id: 1,
      name: "FREE SHIPPING WORLD WIDE",
      icon: <FlightIcon className={classes.policyIcon} />,
    },
    {
      id: 2,
      name: "FREE SHIPPING WORLD WIDE",
      icon: <LocalAtmIcon className={classes.policyIcon} />,
    },
    {
      id: 3,
      name: "FREE SHIPPING WORLD WIDE",
      icon: <CreditCardIcon className={classes.policyIcon} />,
    },
    {
      id: 4,
      name: "FREE SHIPPING WORLD WIDE",
      icon: <HeadsetMicOutlinedIcon className={classes.policyIcon} />,
    },
  ];

  return (
    <>
      <footer>
        {/* Light Section */}
        <Grid className={classes.footerLightBox}>
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
                      {policy.icon}
                    </Typography>
                    <Typography className={classes.policyName}>{policy.name}</Typography>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>

        {/* Dark Section */}
        <Grid className={classes.footerDarkBox}>
          Copyright © 2021 By Commerce.js
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
