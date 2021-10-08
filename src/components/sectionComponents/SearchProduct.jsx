import React from "react";
import ProductGrid from "./ProductGrid";

// Material UI Components
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "25px auto 10px auto",
    padding: "0 15px",
  },
  searchHead: {
    padding: "0px 10px 3px 6px",
    width: "100%",
    letterSpacing: "0.9px",
    fontFamily: "Archivo, sans-serif !important",
    borderBottom: "0.8px solid rgba(0, 0, 0, 0.1)",
    marginTop: "15px !important",
    marginBottom: "25px !important",
    "& span": {
      fontFamily: "Archivo, sans-serif !important",
      marginLeft: 7,
    },
  },
}));

const SearchProduct = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} sm={11} xs={12}>
        <Typography variant="h6" className={classes.searchHead}>
          Search Results For: <span>{"iPhone X"}</span>
        </Typography>

        <ProductGrid />
      </Grid>
    </>
  );
};

export default SearchProduct;
