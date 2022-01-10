import React, { useEffect, Fragment } from "react";
import "../css/style.css";
import AOS from "aos";

// react-glidejs
import "react-glidejs/dist/index.css";
import Glide from "react-glidejs";

// Material-UI Components
import { Typography, Button, Grid } from "@material-ui/core";

// Styled Components
import useStyles from "../css/HomeBannerStyle";

// Icons & Media
import {
  Banner1,
  Banner2,
  Collection1,
  Collection2,
  Collection3,
  Collection4,
} from "../css/HomeBannerStyle";
const banners = [Banner1, Banner2];
const collections = [Collection1, Collection2, Collection3, Collection4];

const HomeBanner = () => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      {/* First Banner Section */}
      <div className={classes.root}>
        <div className="homeBannerAnimeBox">
          <Glide
            type="carousel"
            autoplay="2500"
            animationDuration="800"
            animationTimingFunc="linear"
            perView={1}
            startAt={0}
            hoverPause="true"
            focusAt="center"
          >
            {[...banners].map((bannerItem) => {
              return (
                <>
                  <Fragment>
                    <Grid container className={classes.bannerBox}>
                      <Grid
                        item
                        xl={4}
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
                          color="textSecondary"
                          className={classes.bannerSubTitle}
                        >
                          Trending Mobiles, Headphone and Accessories Collection
                        </Typography>
                        <Button
                          variant="contained"
                          className={classes.bannerBtn}
                        >
                          Shop Now
                        </Button>
                      </Grid>
                      <Grid
                        item
                        xl={8}
                        sm={12}
                        md={6}
                        className={classes.bannerImgBox}
                      >
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
      </div>

      {/* Second Banner Section */}
      <div data-aos="zoom-up">
        <Grid
          container
          direction="row"
          justifyContent="center"
          className={classes.collection}
          spacing={2}
        >
          {[...collections].map((collection) => {
            return (
              <>
                <Grid item sm={6} xs={12}>
                  <Grid className={classes.collectionItem} >
                    <Grid container justifyContent="center">
                      <Grid item xs={6} className={classes.collectionImgBox}>
                        <img
                          src={collection}
                          className={classes.collectionImg}
                          alt="Smartphones"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        container
                        alignItems="center"
                        justifyContent="space-around"
                      >
                        <Grid>
                          <Typography variantMapping="p" className={classes.collectionSlogan}>
                            New Colors Introduced
                          </Typography>
                          <Typography
                            variant="h6"
                            className={classes.collectionBoldContent}
                          >
                            HEADPHONES
                          </Typography>
                          <Button
                            variant="contained"
                            className={classes.collectionBtn}
                          >
                            SHOP NOW
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default HomeBanner;
