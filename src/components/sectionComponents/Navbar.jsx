import React from "react";
import { NavLink } from "react-router-dom";
import ProductDetails from "./ProductDetails";

// Material-UI Components
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Typography, IconButton } from "@material-ui/core";
import { AppBar, Badge, Toolbar, InputBase } from "@material-ui/core";

// Icons & Media
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import BrandIcon from "../../media/brand.png";

const navLinkPaths = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Category",
    path: "/product/1",
  },
  {
    name: "NewsFeed",
    path: "/newsfeed",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    zIndex: 1,
  },
  appbar: {
    paddingTop: 3,
    paddingBottom: 3,
    boxShadow: "0px 1px 10px lightgrey",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 10,
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
      marginLeft: theme.spacing(1),
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
    marginLeft: 20,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navbarLinkItem: {
    marginLeft: 5,
    marginRight: 5,
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

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          color="transparent"
          className={classes.appbar}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <img
                src={BrandIcon}
                className={classes.brandIcon}
                alt="Commerce.js"
              />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Commerce.js
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.navbarLinkBox}>
              {[...navLinkPaths].map((linkItem) => {
                return (
                  <>
                    <Typography
                      variantMapping="p"
                      className={classes.navbarLinkItem}
                    >
                      <NavLink
                        to={linkItem.path}
                        className={classes.navbarLink}
                        activeClassName={classes.activeNavbarLink}
                        exact
                      >
                        {linkItem.name}
                      </NavLink>
                    </Typography>
                  </>
                );
              })}
            </div>
            <div className={classes.badge}>
              <Badge badgeContent={4} color="error">
                <ShoppingCartTwoToneIcon />
              </Badge>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
