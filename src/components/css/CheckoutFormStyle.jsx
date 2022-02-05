import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(650 + theme.spacing(2) * 2)]: {
      width: 650,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    paddingTop: 20,
    paddingBottom: 25,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 30,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      paddingTop: theme.spacing(2),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 3),
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
  backToCartBtn: {
    color: "#000000 !important",
    borderColor: "#000000 !important",
    borderRadius: "2px !important",
    "&:hover": {
      color: "#ffffff !important",
      background: "#000000 !important",
    },
  },
}));
