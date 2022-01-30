import React, { useState, useEffect } from "react";
import useStyles from "../css/SearchProductStyle";
import { useParams } from "react-router-dom";

// Custom Components
import ProductGrid from "./ProductGrid";
import ProdGridSkeleton from "../css/ProdGridSkeleton";

// Commerce.js Instance
import { commerce } from "../../lib/commerce";

// Icons & Media
import NoResultFound from "../../media/result_not_found.png";

// Material UI Components
import { Grid, Typography } from "@mui/material";

const SearchProduct = () => {
  const classes = useStyles();
  const { search } = useParams();
  const [loading, setLoading] = useState(true);

  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    const fetchSearchProducts = async () => {
      setLoading(true);
      const { data } = await commerce.products.list({
        query: search,
      });
      setSearchProducts(data);
      setLoading(false);
    };
    fetchSearchProducts();
  }, [search]);

  return (
    <>
      <Grid container className={classes.root} sm={11} xs={12}>
        <Typography variantMapping="p" className={classes.searchHead}>
          <strong>Search Results For:</strong> <span>{search}</span>
        </Typography>

        {searchProducts ? (
          <Grid container>
            {!loading ? (
              <ProductGrid products={searchProducts} />
            ) : (
              <ProdGridSkeleton />
            )}
          </Grid>
        ) : (
          <Grid container className={classes.noResultFound}>
            <img src={NoResultFound} alt="NoItemFound" />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default SearchProduct;
