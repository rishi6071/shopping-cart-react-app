// Material-UI Components
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px auto 10px auto",
    padding: "0 15px",
  },
  searchHead: {
    padding: "0px 10px 3px 6px",
    width: "100%",
    letterSpacing: "0.9px",
    fontFamily: "Archivo, sans-serif !important",
    borderBottom: "0.8px solid rgba(0, 0, 0, 0.1)",
    marginTop: "15px !important",
    marginBottom: "25px !important",
    "& span": {
      fontFamily: "Archivo, sans-serif !important",
      marginLeft: 7,
    },
  },
  noResultFound: {
    minHeight: "65vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    "& img": {
      maxWidth: 500,
    },
    [theme.breakpoints.down("sm")]: {
      "& img": {
        maxWidth: 300,
      },
    },
  },
}));

export default useStyles;
