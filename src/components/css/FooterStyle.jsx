import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerLightBox: {
    background: "#f1f1f1",
    padding: "25px 15px 45px 15px",
    fontFamily: "Archivo, sans-serif",
    textTransform: "uppercase",
  },
  policyIconBox: {
    width: 55,
    borderRadius: 30,
    padding: 2,
    border: "2px solid white",
    marginBottom: 10,
  },
  policyIcon: {
    background: "white",
    padding: 12,
    borderRadius: 30,
    transform: "scale(1.3)",
    marginBottom: 5,
    transition: "transform 1s",
    cursor: "pointer",
    "&:hover": {
      transform: "rotateY(180deg) scale(1.3)",
    },
  },
  footerDarkBox: {
    paddingTop: 35,
    paddingBottom: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#222222",
    color: "rgb(166, 166, 166)",
    fontWeight: 500,
    letterSpacing: "1.2px",
    fontSize: "14px",
    fontFamily: "algerian, cooper black, Arial",
  },
}));

export default useStyles;
