import React, { useState, useEffect } from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
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
import {
  Box,
  Drawer,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Icons & Media
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import DehazeIcon from "@mui/icons-material/Dehaze";
// import NewspaperIcon from '@mui/icons-material/Newspaper';

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
    fontWeight: "bolder",
    letterSpacing: "1px",
    textDecoration: "none",
    fontSize: "larger",
    transform: "scale(1.15)",
    marginLeft: 20,
    color: "#000000",
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
      marginLeft: "auto",
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
    marginLeft: "auto",
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
  cartLinkItem: {
    marginLeft: 18,
    marginRight: 10,
    fontFamily: "Archivo, sans-serif",
    fontSize: "14.5px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
    },
  },
  badge: {
    marginLeft: 20,
    marginRight: 10,
  },
  humbergerLinkItem: {
    marginLeft: 7,
    marginRight: 0,
    fontSize: "14.5px",
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  humbergerTitle: {
    transform: "translateY(-7px)",
    paddingTop: "16px !important",
    paddingBottom: "16px !important",
    boxShadow: "0px 1px 5px lightgrey",
    marginBottom: "18px !important",
  },
  humbergerBtn: {
    color: "#000000 !important",
    minWidth: "30px !important",
  },
  humbergerSearch: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.08),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.08),
      transition: "0.4s",
    },
    margin: "5px auto 15px auto",
    width: "85%",
  },
  humbergerInputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "18ch",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { cartItems } = props;

  const [openSidebar, setOpenSidebar] = useState(false);
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

  // For Humburger Menu
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenSidebar(open);
  };

  return (
    <>
      <div className={classes.root}>
        {/* Desktop AppBar */}
        <AppBar
          position="static"
          color="transparent"
          className={classes.appbar}
        >
          <Toolbar>
            <NavLink className={classes.title} to="/" nowrap="true">
              Commerce.js
            </NavLink>

            <div className={classes.navbarLinkBox}>
              {[...navLinks].map((linkItem) => {
                return (
                  <div key={linkItem.id}>
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
                  </div>
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
            <div className={classes.cartLinkItem}>
              <NavLink
                to="/cart"
                className={classes.navbarLink}
                activeClassName={classes.activeNavbarLink}
                exact
              >
                <Badge
                  badgeContent={cartItems > 0 ? cartItems : `0`}
                  color="error"
                >
                  <ShoppingCartTwoToneIcon />
                </Badge>
              </NavLink>
            </div>
            <div className={classes.humbergerLinkItem}>
              <Button
                variant="text"
                onClick={toggleDrawer(true)}
                className={classes.humbergerBtn}
              >
                <DehazeIcon />
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* Mobile Humburger Menu */}
        <HumbergerMenu
          openSidebar={openSidebar}
          toggleDrawer={toggleDrawer}
          cartItems={cartItems}
          searchInput={searchInput}
          handleSearch={handleSearch}
          switchToSearch={switchToSearch}
        />
      </div>
    </>
  );
};

const HumbergerMenu = (props) => {
  const classes = useStyles();
  const {
    openSidebar,
    toggleDrawer,
    cartItems,
    searchInput,
    handleSearch,
    switchToSearch,
  } = props;

  return (
    <Drawer
      anchor={"left"}
      open={openSidebar}
      onOpen={toggleDrawer(true)}
      onClose={toggleDrawer(false)}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {/* Brand Title */}
          <ListItem button className={classes.humbergerTitle}>
            <Typography className={classes.title}>Commerce.js</Typography>
          </ListItem>

          {/* Search */}
          <div className={classes.humbergerSearch}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search & Enter…"
              classes={{
                root: classes.inputRoot,
                input: classes.humbergerInputInput,
              }}
              value={searchInput}
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearch}
              onKeyDown={switchToSearch}
            />
          </div>

          {[...NavbarLinks].map((item) => (
            <ListItem
              button
              component={Link}
              to={item.path}
              key={item.name}
              onClick={toggleDrawer(false)}
              style={{ marginTop: 5, marginLeft: 6 }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}

          {/* Cart */}
          <ListItem
            button
            component={Link}
            to="/cart"
            onClick={toggleDrawer(false)}
            style={{ marginTop: 7, marginLeft: 6 }}
          >
            <ListItemIcon>
              <Badge
                badgeContent={cartItems > 0 ? cartItems : `0`}
                color="error"
              >
                <ShoppingCartTwoToneIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default Navbar;
export { HumbergerMenu };
