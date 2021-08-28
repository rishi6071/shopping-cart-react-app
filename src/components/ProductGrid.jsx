import React from "react";

// Material-UI Components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

// Icons & Media
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const products = [
  {
    id: 1,
    name: "Rishi Soni",
    description: "My Name",
    price: "",
    url: ""
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    marginRight: 12,
    marginLeft: 12,
    marginTop: 20,
    marginBottom: 50
  },
  grid: {
    marginTop: 30
  }
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
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/japan-lakes-cover.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" align="center">
                      Apple iPhone Pro
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      align="center"
                      style={{fontWeight: "600"}}
                    >
                      ₹ 75000
                    </Typography>
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
