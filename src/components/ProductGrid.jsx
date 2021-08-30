import React from "react";
import "./css/style.css";

// Material-UI Components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";

// Icons & Media
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DummyImg from "../media/products/iPhone/iphone4.jpeg";

// const products = [
//   {
//     id: 1,
//     name: "Rishi Soni",
//     description: "My Name",
//     price: "",
//     url: "",
//   },
// ];

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
  addCartBtn: {
    width: "100%",
    borderRadius: 0,
    marginTop: 10,
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
});

const ProductGrid = () => {
  const classes = useStyles();

  return (
    <main>
      <Grid container direction="row" justifyContent="center">
        {[1, 1, 1, 1].map(() => {
          return (
            <>
              <Card className={classes.root}>
                <CardActionArea>
                  <Grid
                    style={{ maxHeight: "14.3rem", padding: "20px 25px 5px 25px" }}
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
                    >
                      Apple iPhone Pro
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
    </main>
  );
};

export default ProductGrid;
