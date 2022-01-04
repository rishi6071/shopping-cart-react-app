import React, { useState } from "react";
import useStyles from "../css/ProductGridItemSliderStyle";
import "../css/style.css";

// Material-UI Components
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import Rating from "@mui/material/Rating";

// Icons & Media
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const ProductItem = (props) => {
  const [rating, setRating] = useState(3);
  const classes = useStyles();

  return (
    <>
      <Card className={classes.productItem}>
        <CardActionArea>
          <Grid className={classes.productImgBox}>
            <CardMedia
              component="img"
              alt="Product Item"
              maxHeight="100%"
              maxWidth="100%"
              image={props.img}
              title="Product Item"
            />
          </Grid>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              align="center"
              className={classes.productTitle}
            >
              Apple iPhone Pro
            </Typography>
            <Typography
              variant="body2"
              component="p"
              align="center"
              className={classes.productPrice}
            >
              <Rating
                name="read-only"
                value={rating}
                size="small"
                onChange={(event, newRating) => {
                  setRating(newRating);
                }}
                readOnly
              />
            </Typography>
            <Typography
              variant="body2"
              component="p"
              align="center"
              className={classes.productPrice}
            >
              $900
            </Typography>
            <Button variant="contained" className={classes.addCartBtn}>
              ADD TO CART{" "}
              <AddShoppingCartIcon className={classes.productCartIcon} />
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProductItem;
