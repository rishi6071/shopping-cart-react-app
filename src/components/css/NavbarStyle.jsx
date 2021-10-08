import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    zIndex: 1,
    width: "100vw",
  },
  appbar: {
    paddingTop: 3,
    paddingBottom: 3,
    boxShadow: "0px 1px 5px lightgrey",
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: 10,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  brandIcon: {
    width: 40,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 7,
    },
  },
  title: {
    flexGrow: 1,
    display: "none",
    fontWeight: "bolder",
    letterSpacing: "1px",
    marginLeft: -10,
    fontFamily: "algerian, cooper black, Arial !important",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.08),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.08),
      transition: "0.4s",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  navbarLinkBox: {
    marginRight: 20,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navbarLinkItem: {
    marginLeft: 7,
    marginRight: 7,
    fontFamily: "Archivo, sans-serif",
    fontSize: "14.5px",
    textTransform: "uppercase",
  },
  navbarLink: {
    textDecoration: "none",
    color: "#666666",
    transition: "color 0.7s",
    "&:hover": {
      color: "tomato",
    },
  },
  activeNavbarLink: {
    color: "tomato",
  },
  badge: {
    marginLeft: 20,
    marginRight: 10,
  },
}));

export default useStyles;
