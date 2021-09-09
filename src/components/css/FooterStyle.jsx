import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerLightBox: {
    background: "#f1f1f1",
    padding: "13px 15px 45px 15px",
    fontFamily: "Archivo, sans-serif",
    textTransform: "uppercase",
  },
  policyIconBox: {
    width: 65,
    borderRadius: 40,
    border: "2px solid white",
    background: "white",
    marginBottom: 15,
  },
  policyIcon: {
    height: 60,
    transform: "scale(1.4) translateY(2px)",
    transition: "transform 1s",
    "&:hover": {
      transform: "translateY(2.2px) rotateY(180deg) scale(1.4)",
    },
  },
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
