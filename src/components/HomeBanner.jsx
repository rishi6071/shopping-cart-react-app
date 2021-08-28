import React, { useRef } from "react";

// Material-UI Components
import Glide, { Slide } from "react-glidejs";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { Fragment } from "react";
import { Grid } from "@material-ui/core";

// Icons & Media
import Banner1 from "../media/banner/banner_01.png";
import Banner2 from "../media/banner/banner_02.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: 600,
    marginBottom: 40,
    background: "#f1f1f1",
  },
  mt3: {
    marginTop: 10,
  },
  bannerBox: {
    padding: "10px",
    cursor: "grab",
    "&:active": {
      cursor: "grabbing",
    },
    overflow: "hidden",
  },
  bannerImgBox: {
    display: "block",
    margin: "auto",
  },
  bannerImg: {
    height: 350,
    display: "block",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      height: 550,
    },
  },
  bannerContent: {
    paddingLeft: 50,
    paddingBottom: 20,
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      paddingLeft: 0,
    },
  },
  bannerBoldContent: {
    fontWeight: "bold",
    marginTop: 10,
    textTransform: "uppercase",
    fontFamily: "georgia",
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
    },
  },
  bannerBtn: {
    width: 170,
    borderRadius: 0,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15,
    background: "black",
    color: "white",
    border: "2.5px solid black",
    transition: "0.5s",
    "&:hover": {
      background: "transparent",
      color: "black",
    },
  },
  category: {
    background: "#f1f1f1",
    padding: 15
  }
}));

const HomeBanner = () => {
  const classes = useStyles();
  const gliderRef = useRef(null);

  return (
    <>
      {/* First Banner Section */}
      <div className={classes.root}>
        <Glide
          type="carousel"
          autoplay="3000"
          animationDuration="800"
          animationTimingFunc="linear"
          perView={1}
          startAt={0}
          hoverPause="true"
          focusAt="center"
        >
          {[Banner1, Banner2].map((bannerItem) => {
            return (
              <>
                <Fragment>
                  <Grid container className={classes.bannerBox}>
                    <Grid
                      item
                      sm={12}
                      md={6}
                      container
                      direction="column"
                      justifyContent="center"
                      className={classes.bannerContent}
                    >
                      <Typography variantMapping="p" className={classes.mt3}>
                        New Inspiration 2021
                      </Typography>
                      <Typography
                        variant="h5"
                        className={classes.bannerBoldContent}
                      >
                        Phones Made For You!
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ fontSize: "15px", marginTop: 6 }}
                      >
                        Trending Mobiles, Headphone and Accessories Collection
                      </Typography>
                      <Button variant="contained" className={classes.bannerBtn}>
                        Shop Now
                      </Button>
                    </Grid>
                    <Grid item sm={12} md={6} className={classes.bannerImgBox}>
                      <img
                        src={bannerItem}
                        className={classes.bannerImg}
                        alt="Product Banner"
                      />
                    </Grid>
                  </Grid>
                </Fragment>
              </>
            );
          })}
        </Glide>
      </div>
    
      {/* Second Banner Section */}
      <div className>
          <Grid container direction="column" justifyContent="center">
            <Grid item sm={6} xs={12} className={classes.category}>

            </Grid>
            <Grid item sm={6} xs={12} className={classes.category}>

            </Grid>
          </Grid>
      </div>
    </>
  );
};

export default HomeBanner;
