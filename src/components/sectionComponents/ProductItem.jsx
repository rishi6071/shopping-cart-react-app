import React, { useState } from "react";
import useStyles from "../css/ProductGridItemSliderStyle";
import "../css/style.css";
import { formatPrice } from "../HomePage";

// React-Router-Dom
import { NavLink } from "react-router-dom";

// Material-UI Components
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import Rating from "@mui/material/Rating";

// Icons & Media
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const ProductItem = (props) => {
  const [rating, setRating] = useState(3);
  const classes = useStyles();

  return (
    <>
      <NavLink to={"/product/" + props.item.id} className={classes.productItemLink}>
        <Card className={classes.productItem} id={props.item.id}>
          <CardActionArea>
            <Grid className={classes.productImgBox}>
              <img
                src={props.item.image.url}
                maxHeight="100%"
                maxWidth="100%"
                alt={props.item.image.id}
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
                {props.item.name}
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
                {formatPrice(props.item.price.formatted_with_symbol)}
              </Typography>
              {/* <Button variant="contained" className={classes.addCartBtn}>
              ADD TO CART{" "}
              <AddShoppingCartIcon className={classes.productCartIcon} />
            </Button> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </NavLink>
    </>
  );
};

export default ProductItem;
