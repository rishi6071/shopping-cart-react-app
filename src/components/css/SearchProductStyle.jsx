import React from "react";

// Material-UI Components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Skeleton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px auto 10px auto",
    padding: "0 15px",
  },
  searchHead: {
    padding: "0px 10px 3px 6px",
    width: "100%",
    letterSpacing: "0.9px",
    fontFamily: "Archivo, sans-serif !important",
    borderBottom: "0.8px solid rgba(0, 0, 0, 0.1)",
    marginTop: "15px !important",
    marginBottom: "25px !important",
    "& span": {
      fontFamily: "Archivo, sans-serif !important",
      marginLeft: 7,
    },
  },
  noResultFound: {
    minHeight: "65vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    "& img": {
      maxWidth: 500,
    },
    [theme.breakpoints.down("sm")]: {
      "& img": {
        maxWidth: 300,
      },
    },
  },
  skeletonItemBox: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "5px !important",
    },
  },
  skeletonGridItem: {
    marginBottom: "40px !important",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px !important",
    },
  },
}));

const SkeletonSearchProducts = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      style={{ width: "90vw" }}
      className={classes.skeletonItemBox}
      spacing={1}
    >
      {[1, 1, 1, 1, 1, 1].map(() => {
        return (
          <Grid item md={3} sm={4} xs={6} className={classes.skeletonGridItem}>
            <Grid container justifyContent="center">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"90%"}
                height={160}
                style={{ borderRadius: 3 }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width={"80%"}
                height={15}
                style={{ marginTop: 5 }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width={"70%"}
                height={15}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width={"60%"}
                height={15}
              />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default useStyles;
export { SkeletonSearchProducts };
