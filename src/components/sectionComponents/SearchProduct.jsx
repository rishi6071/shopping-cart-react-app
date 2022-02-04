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
import { Grid, Typography, Pagination } from "@mui/material";

const SearchProduct = () => {
  const classes = useStyles();
  const { search } = useParams();
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchSearchProducts = async () => {
        window.scrollTo({ top: 0 });
        setLoading(true);
        const response = await commerce.products.list({
          query: search,
          limit: 16,
          page: currentPage,
        });
        setTotalPage(response.meta.pagination.total_pages);
        setSearchProducts(response.data);
        setLoading(false);
      };
      fetchSearchProducts();
    } catch (e) {
      console.log(e);
    }
  }, [search, currentPage]);

  const handlePagination = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Grid container className={classes.root} sm={11} xs={12}>
        <Typography variantMapping="p" className={classes.searchHead}>
          <strong>Search Results For:</strong> <span>{search}</span>
        </Typography>

        {searchProducts ? (
          <Grid container>
            {!loading ? (
              <div>
                <ProductGrid products={searchProducts} />
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
              <ProdGridSkeleton count={6} />
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
