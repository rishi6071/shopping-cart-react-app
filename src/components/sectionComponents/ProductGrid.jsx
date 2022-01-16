import React from "react";
import useStyles from "../css/ProductGridItemSliderStyle";
import "../css/style.css";
import ProductItem from "./ProductItem";

// Material-UI Components
import { Grid } from "@material-ui/core";

const ProductGrid = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        className={classes.productGridBox}
      >
        {[...props.products].map((product) => {
          return (
            <>
              <Grid item md={3} sm={4} xs={6} className={classes.productGridItem}>
                <ProductItem item={product} />
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductGrid;
