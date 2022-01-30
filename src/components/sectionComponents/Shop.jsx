import React, { useState, useEffect } from "react";
import useStyles, { categories, valuetext } from "../css/ShopStyle";

// Custom Components
import ProductItem from "./ProductItem";
import ProdGridSkeleton from "../css/ProdGridSkeleton";

// Material-UI Components
import {
  Grid,
  Typography,
  Table,
  TableContainer,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  Link,
  Slider,
} from "@material-ui/core";
import Rating from "@mui/material/Rating";

const Shop = (props) => {
  const classes = useStyles();
  const { products } = props;
  const [loading, setLoading] = useState(true);

  const [rating, setRating] = useState(3);
  const [value, setValue] = useState([20, 37]);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item md={3} xs={12} className={classes.filterBox}>
          {/* Categories */}
          <Grid container>
            <Typography variantMapping="p" className={classes.filterHead}>
              Categories
            </Typography>
            <TableContainer component={Paper} style={{ boxShadow: "none" }}>
              <Table aria-label="simple table">
                <TableBody>
                  {[...categories].map((category) => {
                    return (
                      <>
                        <TableRow
                          key={category.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Link href="#" className={classes.categoryName}>
                              {category.name}
                            </Link>
                          </TableCell>
                          <TableCell align="right">
                            ({category.inStock})
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Price Bar */}
          <Grid container style={{ marginTop: 10 }}>
            <Typography variantMapping="p" className={classes.filterHead}>
              Price <span>(in thousands.)</span>
            </Typography>
            <Grid container className={classes.sliderBox}>
              <Slider
                getAriaLabel={() => "Price Range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Grid>
          </Grid>

          {/* Customer Reviews */}
          <Grid container style={{ marginTop: 8 }}>
            <Typography variantMapping="p" className={classes.filterHead}>
              Customer Review
            </Typography>

            <Grid container className={classes.ratingBox}>
              {[1].map(() => {
                return (
                  <>
                    <Grid item>
                      <Typography
                        variant="body2"
                        className={classes.ratingLayer}
                      >
                        <span>
                          <Rating
                            name="read-only"
                            value={rating}
                            onChange={(event, rating) => {
                              setRating(rating);
                            }}
                          />
                        </span>
                        <span>&#38; up</span>
                      </Typography>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={9} xs={12}>
          {!loading ? (
            <Grid
              container
              direction="row"
              justifyContent="center"
              className={classes.productGridBox}
              spacing={2}
            >
              {[...products].map((item) => {
                return (
                  <>
                    <Grid
                      item
                      md={3}
                      sm={6}
                      xs={6}
                      className={classes.productGridItem}
                    >
                      <ProductItem item={item} />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          ) : (
            <ProdGridSkeleton />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
