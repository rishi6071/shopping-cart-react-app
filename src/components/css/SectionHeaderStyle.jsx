import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionHead: {
    background: "#f1f1f1",
    paddingTop: 8,
    paddingBottom: 20,
    width: "95%",
    borderRadius: 5,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  sectionHeadItem: {
    display: "flex",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    color: "#666666",
  },
  sectionHeadTitle: {
    fontFamily: "Archivo, sans-serif",
    marginLeft: -2,
    letterSpacing: "0.5px",
    wordSpacing: "2.5px",
    textDecoration: "none",
    color: "#666666",
    transition: "color 0.6s",
    display: "flex",
    "&:hover": {
      color: "rgba(0,0,0,1)",
    },
    "& span": {
      marginTop: 3.5,
    },
  },
  sectionHeadIcon: {
    marginRight: 5,
    outline: "1px solid #666666",
    outlineOffset: "-4px !important",
  },
  activeSectionHeadTitle: {
    fontWeight: 600,
    color: "rgba(0,0,0,1)",
  },
}));

export default useStyles;
