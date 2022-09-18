import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import "../css/style.css";

// Commerce.js Instance
import { commerce } from "../../lib/commerce";

// react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Material-UI Components
import Grid from "@material-ui/core/Grid";

// Helpers
import { saveInCache, getFromCache } from "../../helper/cache";

// Custom Components
import useStyles, { responsiveProductCards } from "../css/ProductGridItemSliderStyle";
import SectionHeader from "./SectionHeader";
import ProductItem from "./ProductItem";

const ProductSlider = (props) => {
  const classes = useStyles();
  const { categorySlug, title } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    try {
      // Fetch All Category Products
      const fetchCategoryProducts = async () => {
        const { data } = await commerce.products.list({
          category_slug: [categorySlug],
          limit: 10,
        });
        saveInCache(categorySlug, data);
        if (isMounted) setProducts(data);
      };

      // use products if already in cache otherwise fetch
      const getProducts = getFromCache(categorySlug);
      if (getProducts?.length > 0) setProducts([...getProducts]);
      else fetchCategoryProducts();
    } catch (e) {
      console.log(e);
    }

    // cleanup function
    return () => {
      isMounted = false;
    }
  }, [categorySlug]);

  return (
    <>
      {/* Section Header */}
      <SectionHeader title={title} />

      {/* Item Carousel */}
      <Grid className={classes.productSliderBox}>
        <Carousel
          showDots={isMobile ? false : true}
          infinite={true}
          autoPlay={isMobile ? false : true}
          autoPlaySpeed={6000}
          customTransition="all 1s"
          transitionDuration={2000}
          ssr={true}
          draggable={true}
          deviceType={props.deviceType}
          responsive={responsiveProductCards}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {[...products].map((product, idx) => {
            return <ProductItem item={product} key={idx} />;
          })}
        </Carousel>
      </Grid>
    </>
  );
};

// .MuiButtonBase-root
export default ProductSlider;
