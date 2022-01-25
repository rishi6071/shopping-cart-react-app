import React, { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch All Category Products
    const fetchCategoryProducts = async () => {
      const { data } = await commerce.products.list({
        category_slug: [props.categorySlug],
        limit: 10,
      });
      setProducts(data);
    };

    fetchCategoryProducts();
  }, [props.categorySlug]);

  return (
    <>
      {/* Section Header */}
      <SectionHeader title={props.title} />

      {/* Item Carousel */}
      <Grid className={classes.productSliderBox}>
        <Carousel
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          customTransition="all 1.5s"
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
