import React from "react";
import useStyles from "../css/ProductGridItemSliderStyle";
import "../css/style.css";
import ProductItem from "./ProductItem";

// Material-UI Components
import { Grid } from "@material-ui/core";

const ProductGrid = (props) => {
  const classes = useStyles();
  const { products } = props;

  return (
    <Grid container direction="row" className={classes.productGridBox}>
      {[...products].map((product, idx) => {
        return (
          <Grid item md={3} sm={4} xs={6} className={classes.productGridItem} key={"product_" + idx}>
            <ProductItem item={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductGrid;
