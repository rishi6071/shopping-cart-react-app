import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerDarkBox: {
    paddingTop: 25,
    paddingBottom: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#222222",
    color: "rgb(166, 166, 166)",
    fontWeight: 500,
    letterSpacing: "1.2px",
    fontSize: "14px",
    fontFamily: "algerian, cooper black, Arial !important",
  },
}));

export default useStyles;
