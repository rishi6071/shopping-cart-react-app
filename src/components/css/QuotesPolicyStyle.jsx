import { makeStyles } from "@material-ui/core";

import RatanTata from "../../media/quotes/ratan_tata.jpg";
import ElonMusk from "../../media/quotes/elon_musk.jpg";
import SteveJobs from "../../media/quotes/steve_jobs.jpg";

const useStyles = makeStyles((theme) => ({
  policyGridBox: {
    background: "#f1f1f1",
    padding: "0px 15px 35px 15px",
    fontFamily: "Archivo, sans-serif",
    boxSizing: "border-box",
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 15px 25px 15px",
    },
  },
  policyBox: {
    marginTop: 30,
    paddingTop: 20,
  },
  policyName: {
    lineHeight: 2,
    fontFamily: "Archivo, sans-serif",
    fontSize: "15px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "smaller",
    },
  },
  policyIconBox: {
    width: 85,
    height: 85,
    border: "2px solid white",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 50,
    marginBottom: 15,
  },
  policyIconSpan: {
    width: 65,
    height: 65,
    marginTop: 8,
    background: "white",
    padding: "22px 22px 22px 22px",
    borderRadius: 40,
  },
  policyIcon: {
    transform: "scale(1.4) translateX(-1px) translateY(-1px)",
    transition: "transform 1s",
    "&:hover": {
      transform:
        "translateX(-1.2px) translateY(-1px) rotateY(180deg) scale(1.4)",
    },
  },
  quotesGridBox: {
    background: "#191919",
    color: "#ffffff",
    padding: "45px 25px",
    marginBottom: 40,
  },
  quoteItemBox: {
    paddingBottom: 20,
    textAlign: "center",
    fontFamily: "Archivo, sans-serif",
    color: "#A8A8A8",
  },
  quoteContentBox: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  quoteImg: {
    marginBottom: 25,
    "& img": {
      width: "80px",
      height: "80px",
      objectFit: "cover",
      borderRadius: "50%",
    },
  },
  quoteLines: {
    fontSize: "15px",
    lineHeight: 1.8,
    fontStyle: "italic",
    fontWeight: 200,
    marginBottom: 25,
  },
  quoteByDesignation: {
    fontSize: "13px",
    marginTop: 6,
  },
}));

export default useStyles;
export { RatanTata, ElonMusk, SteveJobs };