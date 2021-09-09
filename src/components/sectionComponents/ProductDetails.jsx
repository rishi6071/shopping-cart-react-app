import React, { useState } from "react";
import "../css/style.css";
import useStyles from "../css/ProductDetailsStyle";
import Breadcrumb from "./Breadcrumb";

// Material-UI Components
import { Link, Grid, Button, Typography } from "@material-ui/core";
import { Divider, ButtonGroup, InputLabel } from "@material-ui/core";
import { MenuItem, FormControl, Select } from "@material-ui/core";

// Icons & Media
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DummyImage from "../../media/banner/banner_01.png";

const ProductDetails = () => {
  const classes = useStyles();
  const [prodQty, setProdQty] = useState(1);
  const [prodInStock, setProdInStock] = useState(7);

  const handleQty = (operation) => {
    if (operation == "+") {
      if (prodQty < prodInStock) setProdQty(prodQty + 1);
    } else {
      if (prodQty > 1) setProdQty(prodQty - 1);
    }
  };

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumb />

      {/* Product Details Box */}
      <Grid container className={classes.productDetailsBox}>
        <Grid item md={6} sm={10} className={classes.productDetailsItem}>
          <Grid container style={{ display: "flex", justifyContent: "center" }}>
            {/* Product Image Gallery */}
            <Grid item sm={2} xs={12} className={classes.productGalleryBox}>
              <Grid
                container
                style={{ display: "flex", justifyContent: "center" }}
              >
                {[1, 1, 1, 1, 1].map((galleryImg) => {
                  return (
                    <>
                      <Grid className={classes.prodGalleryImgBox}>
                        <img
                          src={DummyImage}
                          className={classes.prodGalleryImg}
                          alt="Img"
                        />
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </Grid>

            {/* Product Main Image */}
            <Grid item sm={10} xs={12} className={classes.productMainImgBox}>
              <img src={DummyImage} className={classes.productMainImg} alt="" />
            </Grid>
          </Grid>
        </Grid>

        {/* Product Details */}
        <Grid item md={6} className={classes.productDetailsContentItem}>
          <Typography variant="h5" className={classes.productTitle}>
            Apple iPhone XR
          </Typography>

          <Typography variant="h6" className={classes.productPrice}>
            $250.99
          </Typography>

          <Typography variant="body2" className={classes.ratingBox}>
            {[1, 1, 1].map((ratingStar) => {
              return <StarIcon className={classes.ratingStar} />;
            })}
            {[1, 1].map((ratingStar) => {
              return <StarBorderIcon className={classes.ratingStar} />;
            })}
            <span style={{ marginLeft: 10 }}>
              (
              <Link color="inherit" href="#" className={classes.numReviews}>
                {3} reviews
              </Link>
              )
            </span>
          </Typography>

          <Divider className={classes.divider} />

          <Typography variantMapping="p" className={classes.productDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a
            doloribus iste natus et facere? dolor sit amet consectetur
            adipisicing elit. Sunt a doloribus iste natus et facere?
          </Typography>

          <Grid container style={{ margin: "3px 0 20px -5px" }}>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="productColorLabel">Color</InputLabel>
                <Select labelId="productColorLabel" id="productColorId">
                  <MenuItem value={"Blue"}>Blue</MenuItem>
                  <MenuItem value={"Red"}>Red</MenuItem>
                  <MenuItem value={"Black"}>Black</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="productSizeLabel">Size</InputLabel>
                <Select labelId="productSizeLabel" id="productSizeId">
                  <MenuItem value={6.65}>6.65</MenuItem>
                  <MenuItem value={7.5}>7.50</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Typography className={classes.productQuantityField}>
            <span>Quantity: </span>
            <ButtonGroup
              size="medium"
              aria-label="small button group"
              style={{ transform: "translateY(5px)" }}
            >
              <Button
                className={classes.quantityButtons}
                onClick={() => handleQty("-")}
              >
                <RemoveIcon />
              </Button>
              <input
                className={classes.quantityInputField}
                type="number"
                name="prodQtyId"
                id="prodQtyId"
                value={prodQty}
              />
              <Button
                className={classes.quantityButtons}
                onClick={() => handleQty("+")}
              >
                <AddIcon />
              </Button>
            </ButtonGroup>
          </Typography>

          <Typography
            variantMapping="p"
            className={classes.productExtraDetails}
          >
            Subtotal: <span>$250.99</span>
          </Typography>

          <Typography
            variantMapping="p"
            className={classes.productExtraDetails}
          >
            Brand: <span>Apple</span>
          </Typography>

          <Typography
            variantMapping="p"
            className={classes.productExtraDetails}
          >
            Product Type: <span>Phone</span>
          </Typography>

          <Typography
            variantMapping="p"
            className={classes.productExtraDetails}
          >
            Availability:{" "}
            <span style={{ color: "green" }}>In Stock (7 Items)</span>
          </Typography>
        </Grid>

        {/* AddToCart & BuyNow Button */}
        <Grid container className={classes.buyCartButtonsBox}>
          <Grid item sm={6} xs={12}>
            <Grid
              container
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item sm={6} xs={11} className={classes.addCartButtonBox}>
                <Button contained="filled" className={classes.buyCartButton}>
                  <AddShoppingCartIcon className={classes.buttonIcon} />{" "}
                  <span>Add To Cart</span>
                </Button>
              </Grid>
              <Grid item sm={6} xs={11} className={classes.buyButtonBox}>
                <Button contained="filled" className={classes.buyCartButton}>
                  <CreditCardIcon className={classes.buttonIcon} />{" "}
                  <span>Buy Now</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        
      </Grid>
    </>
  );
};

export default ProductDetails;
