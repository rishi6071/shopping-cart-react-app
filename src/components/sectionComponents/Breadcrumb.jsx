import React from "react";
import { Breadcrumbs, Link, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  breadcumbBox: {
    padding: "5px 30px 4px 40px",
    background: "#f1f1f1",
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

const Breadcrumb = () => {
  const classes = useStyles();

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcumbBox}>
        <Link color="inherit" href="/" className={classes.breadcumbLink}>
          <HomeIcon className={classes.breadcumbHomeIcon} />
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          className={classes.breadcumbLink}
        >
          Products
        </Link>
        <Link
          color="textPrimary"
          href="/components/breadcrumbs/"
          className={classes.breadcumbLink}
          aria-current="page"
        >
          iPhone 11
        </Link>
      </Breadcrumbs>
    </>
  );
};

export default Breadcrumb;
