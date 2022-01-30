import React, { useState, useEffect } from "react";
import useStyles, { categories, valuetext } from "../css/ShopStyle";

// Custom Components
import ProductItem from "./ProductItem";
import ProdGridSkeleton from "../css/ProdGridSkeleton";

// Commerce.js Instance
import { commerce } from "../../lib/commerce";

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
import { Rating, Pagination } from "@mui/material";

const Shop = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(props.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [rating, setRating] = useState(3);
  const [price, setPrice] = useState([20, 37]);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const response = await commerce.products.list({
        limit: 12,
        page: currentPage,
      });
      setTotalPage(response.meta.pagination.total_pages);
      setProducts(response.data);
      setLoading(false);
    };
    fetchProducts();
  }, [currentPage]);

  const handlePagination = (event, value) => {
    setCurrentPage(value);
  };

  const handlePrice = (event, newValue) => {
    setPrice(newValue);
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
                value={price}
                onChange={handlePrice}
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
            <div>
              <Grid
                container
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
              <Grid container justifyContent="center" alignItems="center">
                <Pagination
                  className={classes.paginationBox}
                  count={totalPage}
                  page={currentPage}
                  onChange={handlePagination}
                  color="primary"
                />
              </Grid>
            </div>
          ) : (
            <ProdGridSkeleton />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
