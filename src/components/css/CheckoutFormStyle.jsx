import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    paddingTop: 20,
    paddingBottom: 25,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "25px 15px !important",
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      paddingTop: theme.spacing(2),
    },
  },
  stepper: {
    padding: theme.spacing(1, 0, 3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 0, 3),
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: "20px 0",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectLabel: {
    fontSize: "small !important",
  },
  backBtn: {
    color: "#000000 !important",
    borderColor: "#000000 !important",
    borderRadius: "2px !important",
    "&:hover": {
      color: "#ffffff !important",
      background: "#000000 !important",
    },
  },
  yourOrdersHeading: {
    fontFamily: "Archivo, sans-serif !important",
    fontWeight: "bold",
    marginBottom: "20px !important",
    marginLeft: "3px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "x-large !important",
    },
  },
  orderImgBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    height: "7rem",
    "& img": {
      maxHeight: "7rem",
      maxWidth: "100%",
    },
  },
  checkoutItemImgBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutItemContentBox: {
    padding: "5px 10px",
    display: "flex",
    flexDirection: "column !important",
    justifyContent: "center",
  },
  checkoutItemName: {
    fontSize: "13.8px !important",
  },
  checkoutItemPrice: {
    fontSize: "14.5px !important",
    marginTop: "10px !important",
    fontWeight: 600,
    color: "red",
    "& span": {
      color: "dimgrey",
      fontSize: "12px",
      marginLeft: 5,
      marginRight: 5,
    },
  },
  checkoutTotal: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 10px 0px 10px",
    "& *": {
      fontFamily: "Archivo, sans-serif !important",
      fontSize: "20px !important",
    },
  },
}));
