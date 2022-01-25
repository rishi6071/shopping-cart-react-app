import { makeStyles } from "@material-ui/core";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px auto 30px auto",
    "& *": {
      fontFamily: "Archivo, sans-serif !important",
    },
  },
  cartItemBox: {
    boxShadow: "none !important",
  },
  cartTableHead: {
    "& *": {
      textTransform: "uppercase !important",
      fontSize: "16px !important",
      letterSpacing: "0.8px !important",
    },
  },
  cartItemImgBox: {
    height: "145px",
    "& img": {
      maxWidth: "160px",
      maxHeight: "145px",
      display: "block",
      margin: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      height: "125px",
      "& img": {
        maxWidth: "120px",
        maxHeight: "125px",
      },
    },
  },
  colorSize: {
    marginTop: "6px",
    color: "dimgrey",
    fontSize: "13px !important",
    letterSpacing: "0.5px !important",
  },
  cartItemPrice: {
    color: "red !important",
    fontSize: "16px !important",
    letterSpacing: "0.9px !important",
  },
  cartItemRemoveBtn: {
    padding: "3px 0px",
    marginTop: -4,
    border: "1.45px solid rgba(0,0,0,0.15)",
    color: "dimgrey",
    borderRadius: 0,
    minWidth: 40,
    "&:hover": {
      color: "white",
      background: "black",
    },
  },
  productQuantityField: {
    fontFamily: "inherit",
    marginTop: 8,
    marginBottom: 20,
    marginLeft: 2,
    "& > span": {
      marginRight: 10,
    },
  },
  quantityButtons: {
    borderRadius: 0,
    maxWidth: 35,
    paddingTop: 3,
    paddingBottom: 3,
    color: "dimgrey",
    "&:hover": {
      color: "white",
      background: "black",
    },
  },
  quantityInputField: {
    borderRadius: 0,
    maxWidth: 35,
    border: "1px solid rgba(0,0,0,0.25)",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
  },
  billingBox: {
    margin: "35px auto 25px auto",
    boxShadow: "0px 2px 30px 10px rgb(0 0 0 / 9%)",
    padding: "25px 35px",
    borderRadius: 5,
  },
  billingHead: {
    letterSpacing: "0.9px",
    fontSize: "18.5px",
    marginBottom: 5,
  },
  billingItemHead: {
    fontSize: "15px !important",
    letterSpacing: "0.9px !important",
  },
  billingItemPrice: {
    color: "red !important",
    fontSize: "16px !important",
  },
  cartButtons: {
    border: "1px solid black",
    borderRadius: 0,
    padding: "8px 25px",
    letterSpacing: "0.95px",
    "&:hover": {
      background: "black",
      color: "rgba(255, 255, 255, 0.9)",
    },
  },
  shippingPrice: {
    fontSize: "16px !important",
  },
  emptyCartBox: {
    minHeight: "65vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    "& img": {
      maxWidth: 500,
    },
    [theme.breakpoints.down("sm")]: {
      "& img": {
        maxWidth: 300,
      },
    }
  },
}));

export default useStyles;
