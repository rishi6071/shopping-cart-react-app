import React from "react";
import { useLocation } from "react-router-dom";

import useStyles from "../css/FooterStyle";
import "../css/style.css";

// Material-UI Components
import { Grid, Typography, Button } from "@material-ui/core";

const Footer = (props) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <footer>
      {/* Subscribe Section */}
      {location.pathname === "/" ? (
        <Grid container className={classes.subscribeGridBox}>
          <Grid item md={6} sm={12} className={classes.subscribeGridItem}>
            <Typography variant="h5" className={classes.subscribeHeading}>
              Subscribe to our NewsLetter
            </Typography>
            <Typography className={classes.subscribeSubHeading}>
              A short sentence describing what someone will receive by
              subscribing
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} className={classes.subscribeGridItem}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={classes.subscribeInputGroup}
            >
              <Grid item sm={8}>
                <input
                  type="email"
                  className={classes.subscribeInput}
                  placeholder="Enter your email address"
                />
              </Grid>
              <Grid item sm={4}>
                <Button className={classes.subscribeBtn}>Subscribe</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ``
      )}

      {/* Footer Section */}
      <Grid container className={classes.footerGridBox}>
        Copyright © 2021 By Commerce.js
      </Grid>
    </footer>
  );
};

export default Footer;
