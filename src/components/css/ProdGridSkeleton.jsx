import React from "react";

// Material-UI Components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Skeleton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
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

const ProdGridSkeleton = () => {
  const classes = useStyles();

  return (
    <Grid
      container
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

export default ProdGridSkeleton;