import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import "../css/style.css";

// Custom Components
import SectionHeader from "./SectionHeader";

// Commerce.js Instance
import { commerce } from "../../lib/commerce";

// react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Material-UI Components
import Grid from "@material-ui/core/Grid";

import useStyles, {
  responsiveProductCards,
} from "../css/ProductGridItemSliderStyle";
import ProductItem from "./ProductItem";

const ProductSlider = (props) => {
  const classes = useStyles();
  const { categorySlug, title } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      // Fetch All Category Products
      const fetchCategoryProducts = async () => {
        const { data } = await commerce.products.list({
          category_slug: [categorySlug],
          limit: 10,
        });
        setProducts(data);
      };
      fetchCategoryProducts();
    } catch (e) {
      console.log(e);
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
