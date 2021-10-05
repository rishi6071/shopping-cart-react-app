import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  productDetailsBox: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 15,
    marginBottom: 30,
    fontFamily: "Archivo, sans-serif",
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  productDetailsItem: {
    padding: 20,
    display: "block",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  productDetailsContentItem: {
    padding: 20,
    paddingLeft: 35,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 15,
    },
  },
  productMainImgBox: {
    height: "27rem",
    border: "0.9px solid rgba(220,220,220, 0.55)",
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      order: 1,
      maxWidth: 225,
      height: "18rem",
    },
  },
  productMainImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    margin: "auto",
  },
  productGalleryBox: {
    marginTop: 0.4,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 20,
    },
    [theme.breakpoints.down("xs")]: {
      order: 2,
    },
  },
  prodGalleryImgBox: {
    height: "5.2rem",
    padding: "8px 12px",
    border: "0.9px solid rgba(220,220,220, 0.55)",
    transition: "border 0.3s",
    "&:hover": {
      border: "0.9px solid red",
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.3rem",
      marginTop: 20,
    },
  },
  prodGalleryImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    margin: "auto",
  },
  divider: {
    marginTop: 15,
    marginBottom: 10,
    opacity: 0.5,
  },
  buyCartButtonsBox: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  buyButtonBox: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 15,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  },
  addCartButtonBox: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: 15,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  },
  buyCartButton: {
    width: "100%",
    border: "1px solid black",
    textTransform: "uppercase",
    borderRadius: 0,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: "15px",
    fontFamily: "inherit",
    "&:hover": {
      background: "black",
      color: "#f1f1f1",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  buttonIcon: {
    marginRight: 7,
    fontSize: "20px",
  },
  productTitle: {
    textShadow: "0px 1px 2.5px lightgrey",
    fontFamily: "inherit",
  },
  productPrice: {
    color: "red",
    marginTop: 6,
    fontFamily: "inherit",
  },
  ratingBox: {
    display: "flex",
    marginBottom: 4,
    marginTop: 7,
  },
  ratingStar: {
    color: "#ffcc00",
    fontSize: "19px",
  },
  numReviews: {
    fontSize: "14px",
    paddingLeft: 2,
    paddingRight: 2,
    fontFamily: "inherit",
  },
  productDescription: {
    marginTop: 12,
    marginLeft: 2,
    fontSize: "14px",
    lineHeight: 1.8,
    opacity: 0.8,
    fontFamily: "inherit",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
    [theme.breakpoints.down("sm")]: {
      minWidth: "90%",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  productQuantityField: {
    fontFamily: "inherit",
    marginBottom: 20,
    marginLeft: 2,
    "& > span": {
      marginRight: 10,
    },
  },
  quantityButtons: {
    borderRadius: 0,
    display: "flex",
    alignContent: "center",
    color: "dimgrey",
  },
  quantityInputField: {
    borderRadius: 0,
    maxWidth: 60,
    border: "1px solid rgba(0,0,0,0.23)",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
  },
  productExtraDetails: {
    fontFamily: "inherit",
    marginTop: 9,
    marginLeft: 3,
    letterSpacing: "0.5px",
    "& span": {
      fontSize: "14.5px",
      color: "dimgrey",
      marginLeft: 3,
    },
  },
  // Description, Review, Ratings Section
  productDetailsSections: {
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 30,
    color: "dimgrey",
    "& *": {
      fontFamily: "Archivo, sans-serif",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  descHeading: {
    marginBottom: 25,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  sampleListHead: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  sampleList: {
    lineHeight: 2,
  },
  sampleParaText: {
    lineHeight: 1.7,
    textIndent: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  reviewHeading: {
    fontWeight: "bold",
    marginBottom: 5,
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  sectionRatingStar: {
    color: "#ffcc00",
    fontSize: "22px",
    marginLeft: 1.5,
    marginRight: 1.5,
  },
  ratingDivider: {
    marginTop: 6,
    marginBottom: 10,
    opacity: 0.7,
    height: "1.5px",
    width: "38%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  shippingDetailsSection: {
    lineHeight: 2,
  },
}));

export default useStyles;
