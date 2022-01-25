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
  const classes = useStyles();
  const { item } = props;
  const [rating, setRating] = useState(Math.floor((Math.random() * 4) + 2));

  return (
    <>
      <NavLink to={"/product/" + item.id} className={classes.productItemLink}>
        <Card className={classes.productItem} id={item.id}>
          <CardActionArea>
            <Grid className={classes.productImgBox}>
              <img
                src={item.image.url}
                maxHeight="100%"
                maxWidth="100%"
                alt={item.image.id}
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
                {item.name}
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
                {formatPrice(item.price.formatted_with_symbol)}
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
