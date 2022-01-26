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
    paddingTop: 25,
    paddingBottom: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#222222",
  },
  footerContent: {
    fontFamily: "Lobster Two, cursive !important",
    color: "rgb(166, 166, 166)",
    fontWeight: 600,
    letterSpacing: "1.2px",
    fontSize: "16px",
  },
}));

export default useStyles;
