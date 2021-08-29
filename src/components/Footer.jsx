import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerBox: {
    paddingTop: 25,
    paddingBottom: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#222222",
    color: "rgb(166, 166, 166)",
    fontWeight: 500,
    letterSpacing: "1.2px",
    fontSize: "14px",
    fontFamily: "algerian, cooper black, Arial",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footerBox}>
        Copyright © 2021 By Commerce.js
      </footer>
    </>
  );
};

export default Footer;
