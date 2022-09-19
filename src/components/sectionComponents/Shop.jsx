import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
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
  Slider,
} from "@material-ui/core";
import { Rating, Pagination, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const Shop = () => {
  const classes = useStyles();
  const { category } = useParams();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [rating, setRating] = useState(3);
  const [price, setPrice] = useState([20, 37]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    let isMounted = true;

    try {
      const request = {
        limit: 16,
        page: currentPage,
      };

      // If requested for Category
      if (category) request.category_slug = [category];

      window.scrollTo({ top: 0 });
      setLoading(true);
      const fetchProducts = async () => {
        const response = await commerce.products.list(request);
        if (isMounted) {
          setTotalPage(response?.meta?.pagination?.total_pages);
          setProducts(response?.data);
        }
        setLoading(false);
      };
      fetchProducts();
    } catch (error) {
      console.log(error);
    }

    // cleanup function
    return () => {
      isMounted = false;
    };
  }, [currentPage, category]);

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const handlePagination = (event, value) => {
    setCurrentPage(value);
  };

  const handlePrice = (event, newValue) => {
    setPrice(newValue);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item md={3} xs={12} className={classes.filterBox}>
        {/* Categories */}
        <Grid container>
          <Typography className={classes.filterHead}>Categories</Typography>
          <TableContainer component={Paper} style={{ boxShadow: "none" }}>
            <Table aria-label="simple table">
              <TableBody>
                {[...categories].map((category) => {
                  return (
                    <TableRow
                      key={category?.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <NavLink to={`/shop/category/${category?.slug}`} className={classes.categoryName}>
                          {category?.name}
                        </NavLink>
                      </TableCell>
                      <TableCell align="right">({category?.inStock})</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Price Bar */}
        <Grid container style={{ marginTop: 10 }}>
          <Typography className={classes.filterHead}>
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
          <Typography className={classes.filterHead}>Customer Review</Typography>

          <Grid container className={classes.ratingBox}>
            {[1].map((value, idx) => {
              return (
                <Grid item key={idx}>
                  <Typography variant="body2" className={classes.ratingLayer}>
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
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={9} xs={12}>
        {!loading ? (
          <div>
            {/* Sort By */}
            <Grid container justifyContent="flex-end">
              <FormControl sx={{ m: 1, minWidth: 120 }} style={{ margin: "7px 15px 15px 0" }} size="small">
                <InputLabel id="sort-by-selection">Sort By</InputLabel>
                <Select
                  labelId="sort-by-selection"
                  id="sort-by-selection-helper"
                  value={sortBy}
                  label="Sort By"
                  onChange={handleSortBy}
                >
                  <MenuItem value={{ sortBy: "price", sortOrder: "asc" }}>Price: Low to High</MenuItem>
                  <MenuItem value={{ sortBy: "price", sortOrder: "desc" }}>Price: High to Low</MenuItem>
                  <MenuItem value={{ sortBy: "created_at", sortOrder: "desc" }}>Newest First</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Product Items */}
            <Grid container className={classes.productGridBox} spacing={2}>
              {[...products].map((item, idx) => {
                return (
                  <Grid key={idx} item md={3} sm={6} xs={6} className={classes.productGridItem}>
                    <ProductItem item={item} />
                  </Grid>
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
          <ProdGridSkeleton count={8} />
        )}
      </Grid>
    </Grid>
  );
};

export default Shop;
