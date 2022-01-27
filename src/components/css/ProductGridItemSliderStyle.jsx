import { makeStyles } from "@material-ui/core/styles";

const responsiveProductCards = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const useStyles = makeStyles((theme) => ({
  // ProductGrid.jsx
  productGridBox: {
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  productGridItem: {
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 2,
      paddingRight: 2,
    },
  },
  // ProductItem.jsx
  productItemLink: {
    textDecoration: "none",
  },
  productItem: {
    boxSizing: "border-box",
    margin: "0px auto 40px auto",
    boxShadow: "none",
  },
  productImgBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 15px 5px 15px",
    height: "13.5rem",
    "& img": {
      maxHeight: "13.5rem",
      maxWidth: 215,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 15,
      paddingRight: 15,
      height: "11.3rem",
      "& img": {
        maxHeight: "11.3rem",
        maxWidth: 160,
      },
    },
  },
  productTitle: {
    fontSize: "16px",
    fontFamily: "Archivo, sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    }
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
    [theme.breakpoints.down("xs")]: {
      padding: "7px 1px",
    },
  },
  productCartIcon: {
    marginLeft: 10,
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 3,
    },
  },
  // ProductSlider.jsx
  productSliderBox: {
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 45,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 6,
      paddingRight: 6,
    },
  },
}));

export default useStyles;
export { responsiveProductCards };
