import React from "react";
import "../css/style.css";

// react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Material-UI Components
import Grid from "@material-ui/core/Grid";

// Icons & Media
import DummyImg from "../../media/products/iPhone/iphone1.jpeg";
import DummyImg2 from "../../media/products/iPhone/iphone4.jpeg";

import useStyles, {
  responsiveProductCards,
} from "../css/ProductGridItemSliderStyle";
import ProductItem from "./ProductItem";

const ProductSlider = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.productSliderBox}>
        <Carousel
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          customTransition="all 1.5s"
          transitionDuration={1500}
          ssr={true}
          draggable={true}
          deviceType={props.deviceType}
          responsive={responsiveProductCards}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {[1, 1, 1, 1, 1, 1, 1].map((product, idx) => {
            return <ProductItem img={DummyImg} key={idx} />;
          })}
          <ProductItem img={DummyImg2} />
        </Carousel>
      </Grid>
    </>
  );
};

// .MuiButtonBase-root
export default ProductSlider;
