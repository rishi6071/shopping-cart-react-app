import React from "react";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";

// Material-Ui Components & Media
import { Breadcrumbs, Link, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  breadcumbBox: {
    padding: "5px 30px 4px 40px",
    background: "#f1f1f1",
    [theme.breakpoints.down("xs")]: {
      padding: "5px 10px 4px 22px",
    },
  },
  breadcumbLink: {
    color: "dimgrey",
    alignItems: "center",
    fontSize: "12.5px",
  },
  breadcumbHomeIcon: {
    marginTop: 5,
    transition: "color 0.5s",
    "&:hover": {
      color: "black",
    },
  },
}));

const Breadcrumb = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const { productName } = props;

  return (
    <>
      {!isMobile ? (
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcumbBox}>
          <Link color="inherit" href="/" className={classes.breadcumbLink}>
            <HomeIcon className={classes.breadcumbHomeIcon} />
          </Link>
          <Link color="inherit" href="#" className={classes.breadcumbLink}>
            {location.pathname === "/cart" ? "Cart" : "Shop"}
          </Link>
          <Link
            color="textPrimary"
            href="#"
            className={classes.breadcumbLink}
            aria-current="page"
          >
            {productName}
          </Link>
        </Breadcrumbs>
      ) : (
        ``
      )}
    </>
  );
};

export default Breadcrumb;
