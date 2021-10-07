import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px auto",
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
    maxWidth: "160px",
    height: "145px",
    "& img": {
      maxHeight: "145px",
      margin: "auto",
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
    "& span": {
      fontSize: "18px !important",
      marginTop: "1px !important",
      marginRight: "0.5px !important",
    },
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
    maxWidth: 45,
    color: "dimgrey",
  },
  quantityInputField: {
    borderRadius: 0,
    maxWidth: 45,
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
    "& span": {
      fontSize: "18px !important",
      marginRight: "0.5px !important",
    },
  },
  cartButtons: {
    border: "1px solid black",
    borderRadius: 0,
    padding: "8px 25px",
    letterSpacing: "0.95px",
    "&:hover": {
      background: "black",
      color: "white",
    },
  },
  shippingPrice: {
    fontSize: "16px !important",
  }
}));

export default useStyles;
