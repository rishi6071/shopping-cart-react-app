import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 50,
  },
  grid: {
    marginTop: 30,
  },
  newsBtn: {
    width: 135,
    borderRadius: 0,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 15,
    background: "transparent",
    color: "black",
    border: "1px solid black",
    fontWeight: "300",
    letterSpacing: "1px",
    transition: "0.5s",
    boxShadow: "none",
    "&:hover": {
      background: "black",
      color: "white",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "black",
  },
  newsContentBox: {
    height: 195,
    overflow: "hidden",
  },
}));

export default useStyles;
