import React from "react";
import useStyles from "../css/FooterStyle";
import '../css/style.css';

// Material-UI Components
import { Grid } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer>
        {/* Dark Section */}
        <Grid className={classes.footerDarkBox}>
          Copyright © 2021 By Commerce.js
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
