import React from "react";
import "../css/style.css";

// Material-UI Components
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { Typography, Grid, Button } from "@material-ui/core";

// Icons & Media
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DummyImg from "../../media/products/iPhone/iphone4.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 2,
      paddingRight: 2,
    },
  },
  productGridBox: {
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  productItem: {
    boxSizing: "border-box",
    margin: "0px auto 50px auto",
    boxShadow: "none",
  },
  productImgBox: {
    height: "15.5rem",
    maxWidth: 215,
    display: "block",
    margin: "auto",
    padding: "20px 25px 5px 25px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 15,
      paddingRight: 15,
      maxWidth: 160,
      height: "12.3rem",
    },
  },
  productTitle: {
    fontSize: "17.5px",
    fontFamily: "Archivo, sans-serif",
  },
  productPrice: {
    fontWeight: 600,
    fontFamily: "Archivo, sans-serif",
  },
  addCartBtn: {
    width: "100%",
    borderRadius: 0,
    marginTop: 7,
    padding: "10px",
    boxShadow: "none",
    background: "#f1f1f1",
    border: "1px solid black",
    fontWeight: "bolder",
    letterSpacing: "0.4px",
    fontSize: "13px",
    textTransform: "uppercase",
    "&:hover": {
      boxShadow: "none",
      color: "#f1f1f1",
      background: "black",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "7px 5px",
      fontSize: "12.5px",
    },
  },
  productCartIcon: {
    marginLeft: 10,
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 3,
    },
  },
  ratingBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: -3,
    marginBottom: 4,
  },
  ratingStar: {
    color: "#ffcc00",
    fontSize: "17px",
  },
}));

const ProductGrid = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        className={classes.productGridBox}
      >
        {[1, 1, 1, 1, 1, 1].map(() => {
          return (
            <>
              <Grid item md={3} sm={4} xs={6} className={classes.root}>
                <Card className={classes.productItem}>
                  <CardActionArea>
                    <Grid className={classes.productImgBox}>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        maxHeight="100%"
                        maxWidth="100%"
                        image={DummyImg}
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
                          return (
                            <StarBorderIcon className={classes.ratingStar} />
                          );
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
                      <Button
                        variant="contained"
                        className={classes.addCartBtn}
                      >
                        ADD TO CART{" "}
                        <AddShoppingCartIcon
                          className={classes.productCartIcon}
                        />
                      </Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductGrid;
