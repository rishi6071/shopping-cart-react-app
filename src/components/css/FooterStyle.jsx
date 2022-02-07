import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subscribeGridBox: {
    borderTop: "1.5px solid #ebebeb",
    padding: "50px 35px",
    paddingTop: 40,
    fontFamily: "Archivo, sans-serif",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 5px",
      paddingTop: 30,
      textAlign: "center",
    },
  },
  subscribeGridItem: {
    marginTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  subscribeHeading: {
    textTransform: "uppercase",
    fontFamily: "Archivo, sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontWeight: 600,
    },
  },
  subscribeSubHeading: {
    color: "#808D9E",
    fontFamily: "Archivo, sans-serif",
    fontSize: "14px",
    marginTop: 4,
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  },
  subscribeInput: {
    boxSizing: "border-box",
    border: "none",
    background: "#F1F1F1",
    padding: "14px 25px",
    fontSize: "14px",
    width: "100%",
    "&::placeholder": {
      fontFamily: "Archivo, sans-serif",
      fontSize: "14.3px",
    },
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  },
  subscribeBtn: {
    padding: "9px 25px",
    background: "#222222",
    color: "#FFFFFF",
    borderRadius: 0,
    textTransform: "lowercase",
    width: "100%",
    fontSize: "15px",
    border: "none",
    "&:hover": {
      background: "#000000",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  },
  footerGridBox: {
    padding: "25px 35px 45px 35px",
    background: "#222222",
  },
  footerGridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    [theme.breakpoints.down("xs")]: {
      alignItems: "flex-start",
    },
  },
  footerHead: {
    fontSize: "18px",
    color: "lightgrey",
    fontFamily: "Archivo, sans-serif",
  },
  footerItemList: {
    lineHeight: 1,
    fontSize: "14px",
    marginTop: 10,
    fontFamily: "Archivo, sans-serif",
    maxWidth: 300,
    color: "grey",
    "& span": {
      marginRight: 10,
      "& *": {
        color: "lightgrey",
        fontSize: "18px",
      },
    },
  },
  footerItemLink: {
    textDecoration: "none",
    color: "grey",
    "&:hover": {
      color: "crimson",
    },
  },
}));

const footerLinksList = [
  { path: "/", name: "Categories" },
  { path: "/shop", name: "Shop" },
  { path: "/", name: "Terms & Conditions" },
  { path: "/contact", name: "Contact Us" },
  { path: "/", name: "Quotes" },
  { path: "/newsfeed", name: "Latest News" },
];

export default useStyles;
export { footerLinksList };
