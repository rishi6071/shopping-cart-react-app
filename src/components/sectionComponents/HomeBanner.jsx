import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
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
import { homeBanners } from "../css/HomeBannerStyle";

const HomeBanner = (props) => {
  const classes = useStyles();
  const { categories } = props;

  useEffect(() => {
    try {
      AOS.init({
        duration: 2000,
      });
    } catch (e) {
      console.log(e);
    }
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
            {[...homeBanners].map((bannerItem) => {
              return (
                <Grid container className={classes.bannerBox} key={`banner_${bannerItem.id}`}>
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
                    <Typography className={classes.mt3}>New Inspiration 2022</Typography>
                    <Typography variant="h5" className={classes.bannerBoldContent}>
                      {bannerItem?.title}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" className={classes.bannerSubTitle}>
                      {bannerItem?.subtitle}
                    </Typography>
                    <Button
                      variant="contained"
                      className={classes.bannerBtn}
                      component={Link}
                      to={"/shop/category/" + bannerItem?.slug}
                    >
                      Shop Now
                    </Button>
                  </Grid>
                  <Grid item xl={8} sm={12} md={6} className={classes.bannerImgBox}>
                    <img src={bannerItem?.url} className={classes.bannerImg} alt="Product Banner" loading="lazy" />
                  </Grid>
                </Grid>
              );
            })}
          </Glide>
        </div>
      </div>

      {/* Second Category Section */}
      <div data-aos="zoom-up">
        <Grid container direction="row" justifyContent="center" className={classes.collection} spacing={2}>
          {[...categories].map((collection) => {
            let iterable = collection.children;
            if (collection.children.length > 0) iterable = collection.children;

            return (
              <>
                {[...iterable].map((category) => {
                  return (
                    <Grid item sm={6} xs={12} key={`category_${category.id}`}>
                      <Grid className={classes.collectionItem}>
                        <Grid container justifyContent="center">
                          <Grid item xs={6} className={classes.collectionImgBox}>
                            <img src={category.assets[0].url} className={classes.collectionImg} alt={category.name} />
                          </Grid>
                          <Grid item xs={6} container alignItems="center" justifyContent="space-around">
                            <Grid>
                              <Typography className={classes.collectionSlogan}>
                                {category.description === undefined ? "Newly Branded" : category.description}
                              </Typography>
                              <Typography variant="h6" className={classes.collectionBoldContent}>
                                {category.name}
                              </Typography>
                              <Button
                                variant="contained"
                                className={classes.collectionBtn}
                                component={Link}
                                to={"/shop/category/" + category.slug}
                              >
                                SHOP NOW
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              </>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default HomeBanner;
