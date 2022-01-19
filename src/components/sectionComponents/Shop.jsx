import { useState } from "react";
import ProductItem from "./ProductItem";

// Material-UI Components
import {
  makeStyles,
  Grid,
  Typography,
  Table,
  TableContainer,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  Link,
  Slider,
} from "@material-ui/core";
import Rating from "@mui/material/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "15px auto",
    padding: "0px 20px",
    "& *": {
      fontFamily: "Archivo, sans-serif",
    },
  },
  filterBox: {
    padding: "5px 15px 5px 8px",
  },
  filterHead: {
    paddingLeft: 10,
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginTop: 20,
    marginBottom: 10,
    "& span": {
      fontSize: "11px",
      color: "dimgrey",
      marginLeft: 5,
    },
  },
  categoryName: {
    fontSize: "14.5px",
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
  },
  sliderBox: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  ratingBox: {
    display: "block !important",
    paddingLeft: 15,
    paddingRight: 15,
  },
  ratingLayer: {
    marginTop: 2.5,
    display: "flex",
    "& > span:nth-child(2)": {
      marginLeft: 9,
      paddingTop: 2.3,
      color: "dimgrey",
    },
  },
}));

const categories = [
  {
    id: "category1",
    name: "Mobile",
    inStock: "35",
  },
  {
    id: "category2",
    name: "Headphone",
    inStock: "55",
  },
  {
    id: "category3",
    name: "Laptop",
    inStock: "15",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const Shop = (props) => {
  const classes = useStyles();
  const [rating, setRating] = useState(3);
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item md={3} xs={12} className={classes.filterBox}>
          {/* Categories */}
          <Grid container>
            <Typography variantMapping="p" className={classes.filterHead}>
              Categories
            </Typography>
            <TableContainer component={Paper} style={{ boxShadow: "none" }}>
              <Table aria-label="simple table">
                <TableBody>
                  {[...categories].map((category) => {
                    return (
                      <>
                        <TableRow
                          key={category.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Link href="#" className={classes.categoryName}>
                              {category.name}
                            </Link>
                          </TableCell>
                          <TableCell align="right">
                            ({category.inStock})
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Price Bar */}
          <Grid container style={{ marginTop: 10 }}>
            <Typography variantMapping="p" className={classes.filterHead}>
              Price <span>(in thousands.)</span>
            </Typography>
            <Grid container className={classes.sliderBox}>
              <Slider
                getAriaLabel={() => "Price Range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Grid>
          </Grid>

          {/* Customer Reviews */}
          <Grid container style={{ marginTop: 8 }}>
            <Typography variantMapping="p" className={classes.filterHead}>
              Customer Review
            </Typography>

            <Grid container className={classes.ratingBox}>
              {[1].map(() => {
                return (
                  <>
                    <Grid item>
                      <Typography
                        variant="body2"
                        className={classes.ratingLayer}
                      >
                        <span>
                          <Rating
                            name="read-only"
                            value={rating}
                            onChange={(event, rating) => {
                              setRating(rating);
                            }}
                          />
                        </span>
                        <span>&#38; up</span>
                      </Typography>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={9} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            className={classes.productGridBox}
            spacing={2}
          >
            {[...props.products].map((item) => {
              return (
                <>
                  <Grid
                    item
                    md={3}
                    sm={6}
                    xs={6}
                    className={classes.productGridItem}
                  >
                    <ProductItem item={item} />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
