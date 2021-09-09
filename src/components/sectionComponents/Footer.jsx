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
                    xs={12}
                    sm={6}
                    lg={3}
                    align="center"
                    style={{ marginTop: 35 }}
                    key={policy.id}
                  >
                    <Typography className={classes.policyIconBox}>
                      {policy.icon}
                    </Typography>
                    <Typography>{policy.name}</Typography>
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
