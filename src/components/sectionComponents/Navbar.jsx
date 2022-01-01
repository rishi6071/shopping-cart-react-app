import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavbarLinks from "./Path";

// Material-UI Components
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import { AppBar, Badge, Toolbar, InputBase } from "@material-ui/core";

// Icons & Media
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import BrandIcon from "../../media/brand.png";

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
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
    display: "block",
    fontWeight: "bolder",
    letterSpacing: "1px",
    marginLeft: -10,
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
    [theme.breakpoints.down("sm")]: {
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

const Navbar = () => {
  const classes = useStyles();
  const [navLinks, setNavLinks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setNavLinks([...NavbarLinks]);
  }, []);

  const handleSearch = (event) => {
    if (event.keyCode === 13) {
      window.location.href = "/search";
    } else {
      setSearchInput(event.target.value);
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
            <Typography className={classes.title} variant="h5" noWrap>
              Commerce.js
            </Typography>
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
                defaultValue={searchInput}
                inputProps={{ "aria-label": "search" }}
                onKeyDown={handleSearch}
              />
            </div>
            <div className={classes.navbarLinkItem} style={{ marginLeft: 15, marginRight: 10 }}>
              <NavLink
                to="/cart"
                className={classes.navbarLink}
                activeClassName={classes.activeNavbarLink}
                exact
              >
                <Badge badgeContent={4} color="error">
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
