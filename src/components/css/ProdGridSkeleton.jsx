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

const ProdGridSkeleton = (props) => {
  const classes = useStyles();
  const { count } = props;
  const gridCount = new Array(count).fill(1);

  return (
    <Grid container className={classes.skeletonItemBox} spacing={1}>
      {[...gridCount].map((grd, idx) => {
        return (
          <Grid item md={3} sm={4} xs={6} className={classes.skeletonGridItem} key={`product_shimmer_${idx + 1}`}>
            <Grid container justifyContent="center">
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{ bgcolor: "grey.200" }}
                width={"90%"}
                height={160}
                style={{ borderRadius: 3 }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ bgcolor: "grey.200" }}
                width={"75%"}
                height={15}
                style={{ marginTop: 5 }}
              />
              <Skeleton variant="text" animation="wave" sx={{ bgcolor: "grey.200" }} width={"65%"} height={15} />
              <Skeleton variant="text" animation="wave" sx={{ bgcolor: "grey.200" }} width={"55%"} height={15} />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProdGridSkeleton;
