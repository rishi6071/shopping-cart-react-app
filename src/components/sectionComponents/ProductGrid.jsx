import React from "react";
import "../css/style.css";

// Material-UI Components
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia } from "@material-ui/core";
import { Typography, Grid, Button } from "@material-ui/core";

// Icons & Media
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DummyImg from "../../media/products/iPhone/iphone4.jpeg";

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    maxWidth: 225,
    margin: "0px 17px 50px 17px",
    boxShadow: "none",
  },
  grid: {
    marginTop: 30,
  },
  productTitle: {
    fontSize: "17.5px",
  },
  addCartBtn: {
    width: "100%",
    borderRadius: 0,
    marginTop: 7,
    padding: 10,
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
  },
  ratingBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: -3,
    marginBottom: 4,
  },
  ratingStar: {
    color: "#ffcc00",
    fontSize: "16px",
  },
});

const ProductGrid = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justifyContent="center">
        {[1, 1, 1, 1].map(() => {
          return (
            <>
              <Card className={classes.root}>
                <CardActionArea>
                  <Grid
                    style={{
                      maxHeight: "16rem",
                      padding: "20px 25px 5px 25px",
                    }}
                  >
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
                      style={{ fontWeight: "600" }}
                    >
                      $900
                    </Typography>
                    <Button variant="contained" className={classes.addCartBtn}>
                      ADD TO CART{" "}
                      <AddShoppingCartIcon
                        style={{ marginLeft: 10, fontSize: "18px" }}
                      />
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductGrid;
