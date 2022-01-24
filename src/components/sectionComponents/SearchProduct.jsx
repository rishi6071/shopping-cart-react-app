import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductGrid from "./ProductGrid";

// Commerce.js Instance
import { commerce } from "../../lib/commerce";

// Icons & Media
import NoResultFound from "../../media/result_not_found.png";

// Material UI Components
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px auto 10px auto",
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
  noResultFound: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    "& img": {
      maxWidth: 500,
    },
  },
}));

const SearchProduct = (props) => {
  const classes = useStyles();
  const { search } = useParams();
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    const fetchSearchProducts = async () => {
      const { data } = await commerce.products.list({
        query: search,
      });

      setSearchProducts(data);
    };

    fetchSearchProducts();
  }, [search]);

  useEffect(() => {
    console.log(searchProducts);
  }, [searchProducts]);

  return (
    <>
      <Grid container className={classes.root} sm={11} xs={12}>
        <Typography variantMapping="p" className={classes.searchHead}>
          <strong>Search Results For:</strong> <span>{search}</span>
        </Typography>

        {searchProducts ? (
          <ProductGrid products={searchProducts} />
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
