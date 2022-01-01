import React from "react";
import useStyles from "../css/ProductGridItemStyle";
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

// Icons & Media
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const ProductItem = (props) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.productItem}>
        <CardActionArea>
          <Grid className={classes.productImgBox}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              maxHeight="100%"
              maxWidth  ="100%"
              image={props.img}
              title="Contemplative Reptile"
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
            <Typography variant="body2" className={classes.ratingBox}>
              {[1, 1, 1].map((ratingStar) => {
                return <StarIcon className={classes.ratingStar} />;
              })}
              {[1, 1].map((ratingStar) => {
                return <StarBorderIcon className={classes.ratingStar} />;
              })}
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
