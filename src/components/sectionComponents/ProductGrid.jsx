import React from "react";
import useStyles from "../css/ProductGridItemStyle";
import "../css/style.css";
import ProductItem from "./ProductItem";

// Material-UI Components
import { Grid } from "@material-ui/core";

// Icons & Media
import DummyImg from "../../media/products/iPhone/iphone4.jpeg";

const ProductGrid = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        className={classes.productGridBox}
      >
        {[1, 1, 1, 1, 1, 1].map(() => {
          return (
            <>
              <Grid item md={3} sm={4} xs={6} className={classes.root}>
                <ProductItem img={DummyImg} />
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductGrid;
