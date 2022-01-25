import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import NavbarLinks from "./Path";

// Material-UI Components
import { alpha, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Badge,
  Toolbar,
  InputBase,
  Typography,
} from "@material-ui/core";

// Icons & Media
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    zIndex: 1,
    maxWidth: "1400px",
  },
  appbar: {
    paddingTop: 3,
    paddingBottom: 3,
    boxShadow: "0px 1px 5px lightgrey",
  },
  title: {
    flexGrow: 1,
    display: "block",
    fontWeight: "bolder",
    letterSpacing: "1px",
    marginLeft: 15,
    fontFamily: "Acme, sans-serif",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 10,
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
    [theme.breakpoints.down("xs")]: {
      display: "none",
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

const Navbar = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [navLinks, setNavLinks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setNavLinks([...NavbarLinks]);
  }, []);

  // For Searching Feature
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };
  const switchToSearch = (event) => {
    if (event.keyCode === 13 && searchInput.length > 0) {
      history.push(`/search/${searchInput}`);
      setSearchInput("");
    }
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          color="transparent"
          className={classes.appbar}
        >
          <Toolbar>
            <Typography className={classes.title} variant="h5" noWrap>
              Commerce.js
            </Typography>
            {/* <div className={classes.searchBox}>
              <input type="text" name="" id="" />
              <button type="button">
                <SearchIcon fontSize="small" />
              </button>
            </div> */}
            <div className={classes.navbarLinkBox}>
              {[...navLinks].map((linkItem) => {
                return (
                  <>
                    <Typography
                      variantMapping="p"
                      className={classes.navbarLinkItem}
                      key={linkItem.id}
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
                value={searchInput}
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearch}
                onKeyDown={switchToSearch}
              />
            </div>
            <div
              className={classes.navbarLinkItem}
              style={{ marginLeft: 15, marginRight: 10 }}
            >
              <NavLink
                to="/cart"
                className={classes.navbarLink}
                activeClassName={classes.activeNavbarLink}
                exact
              >
                <Badge
                  badgeContent={props.cartItems > 0 ? props.cartItems : `0`}
                  color="error"
                >
                  <ShoppingCartTwoToneIcon />
                </Badge>
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
