import React from "react";
import useStyles from './css/NavbarStyle';

// Material-UI Components
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Badge } from "@material-ui/core";

// Icons & Media
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import BrandIcon from "../media/brand.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="transparent" className={classes.appbar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <img src={BrandIcon} className={classes.brandIcon} alt="Commerce.js" />
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
