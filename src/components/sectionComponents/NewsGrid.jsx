import React, { useState, useEffect } from "react";
import "../css/style.css";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import useStyles, { newsRandImgs } from "../css/NewsGridStyle";
import SectionHeader from "./SectionHeader";

// Material-UI Components
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const NewsGrid = (props) => {
  const classes = useStyles();

  const [newsCarouselData, setNewsCarouselData] = useState([]);
  const [newsGridData, setNewsGridData] = useState([]);

  const [showNewsGrid, setShowNewsGrid] = useState(false);
  const [showNewsCarousel, setShowNewsCarousel] = useState(false);

  // Filter Date Function
  const filterDate = (dateObj) => {
    const date = new Date(dateObj);
    return `${date.toDateString()}`;
  };

  // Filtering Resource Request
  useEffect(() => {
    [...props.resources].forEach((element) => {
      if (element === "newsCarousel") {
        setShowNewsCarousel(true);
      } else if (element === "newsGrid") {
        setShowNewsGrid(true);
      }
    });
  });

  // useEffect for News Carousel
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "Gadgets",
        safeSearch: "Off",
        textFormat: "Raw",
        freshness: "Week",
      },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "6f7060b3efmsh122f3af8594763dp1e7b8ajsn7ff3f2f5bd27",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.value);
        setNewsCarouselData(response.data.value);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // useEffect for News Cards
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "Technology",
        safeSearch: "Off",
        textFormat: "Raw",
        freshness: "Week",
      },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "6f7060b3efmsh122f3af8594763dp1e7b8ajsn7ff3f2f5bd27",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.value);
        setNewsGridData(response.data.value);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const responsiveNewsCards = {
    0: { items: 1 },
    768: {
      items: 2,
    },
    1024: { items: 3 },
    1900: {
      items: 4,
    },
  };

  return (
    <>
      <div className={classes.root}>
        {/* News Horizontal Cards */}
        <Grid container style={{ display: showNewsGrid === true ? "block" : "none", marginBottom: 20 }}>
          {[...newsGridData].map((newsCard) => {
            return (
              <>
                <Grid item style={{ margin: "20px 15px" }}>
                  <Card>
                    <CardActionArea>
                      <Grid container>
                        <Grid item sm={5} xs={12}>
                          <CardMedia
                            component="img"
                            alt="News_Article"
                            height="247"
                            image={
                              newsRandImgs[
                                Math.floor(Math.random() * newsRandImgs.length)
                              ]
                            }
                            title="Contemplative Reptile"
                          />
                        </Grid>
                        <Grid item sm={7} xs={12}>
                          <CardContent style={{ padding: 20 }}>
                            <Container
                              disableGutters
                              className={classes.horizontalNewsContentBox}
                            >
                              <Typography
                                gutterBottom
                                className={classes.newsName}
                              >
                                {newsCard.name}
                              </Typography>
                              <Typography
                                variantMapping="p"
                                className={classes.newsSource}
                              >
                                By {newsCard.provider[0].name} [
                                {filterDate(newsCard.datePublished)}]
                              </Typography>
                              <Typography
                                variant="body2"
                                component="p"
                                className={classes.newsDescription}
                              >
                                {newsCard.description}
                              </Typography>
                            </Container>
                            <Button
                              variant="contained"
                              className={classes.horizontalNewsBtn}
                              href={"#"}
                              target="_blank"
                            >
                              Read More
                            </Button>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>

        {/* News AliceCarousel */}
        <Grid container style={{ display: showNewsCarousel === true ? "block" : "none" }}>
          <SectionHeader title="newsPanel" />
          <AliceCarousel
            autoPlay
            animationDuration="1000"
            disableButtonsControls="false"
            autoPlayInterval={2000}
            responsive={responsiveNewsCards}
            mouseTracking="false"
            items={[...newsCarouselData].map((newsfeed) => {
              return (
                <>
                  <Grid item>
                    <Card style={{ margin: "20px 15px" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="News_Article"
                          height="250"
                          image={
                            newsRandImgs[
                              Math.floor(Math.random() * newsRandImgs.length)
                            ]
                          }
                          title="Contemplative Reptile"
                        />
                        <CardContent style={{ padding: "20px 20px 25px 20px" }}>
                          <Container
                            disableGutters
                            className={classes.newsContentBox}
                          >
                            <Typography
                              gutterBottom
                              className={classes.newsName}
                            >
                              {newsfeed.name}
                            </Typography>
                            <Typography
                              variantMapping="p"
                              style={{ marginTop: 5 }}
                              className={classes.newsSource}
                            >
                              By {newsfeed.provider[0].name} [
                              {filterDate(newsfeed.datePublished)}]
                            </Typography>
                            <Typography
                              variant="body2"
                              component="p"
                              style={{ lineHeight: 1.6 }}
                              className={classes.newsDescription}
                            >
                              {newsfeed.description}
                            </Typography>
                          </Container>
                          <Button
                            variant="contained"
                            className={classes.newsBtn}
                            href={newsfeed.url}
                            target="_blank"
                          >
                            Read More
                          </Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </>
              );
            })}
          />
        </Grid>
      </div>
    </>
  );
};

export default NewsGrid;
