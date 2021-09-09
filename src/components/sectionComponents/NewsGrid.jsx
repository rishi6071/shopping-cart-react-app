import React, { useState, useEffect } from "react";
import "../css/style.css";
import axios from "axios";
import SectionHeader from "./SectionHeader";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import useStyles, { newsRandImgs } from "../css/NewsGridStyle";

// Material-UI Components
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const NewsGrid = () => {
  const classes = useStyles();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "Technology",
        safeSearch: "Off",
        textFormat: "Raw",
        freshness: "Day",
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
        setNewsData(response.data.value);
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
        <Grid container>
          <SectionHeader title={"NEWS Panel"} />

          <AliceCarousel
            autoPlay
            animationDuration="1000"
            disableButtonsControls="false"
            autoPlayInterval={2000}
            responsive={responsiveNewsCards}
            mouseTracking="false"
            items={[...newsData].map((newsfeed) => {
              return (
                <>
                  <Grid item>
                    <Card style={{ margin: "20px 15px" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="News_Article"
                          height="250"
                          image={newsRandImgs[Math.floor(Math.random() * newsRandImgs.length)]}
                          title="Contemplative Reptile"
                        />
                        <CardContent style={{ padding: "20px 20px 25px 20px" }}>
                          <Container
                            disableGutters
                            className={classes.newsContentBox}
                          >
                            <Typography
                              gutterBottom
                              style={{
                                fontWeight: "600",
                                fontSize: "17px",
                                letterSpacing: "0.5px",
                              }}
                            >
                              {newsfeed.name}
                            </Typography>
                            <Typography
                              variantMapping="p"
                              style={{
                                fontStyle: "italic",
                                marginBottom: "8px",
                                fontSize: "13px",
                              }}
                            >
                              By {newsfeed.provider[0].name}
                            </Typography>
                            <Typography
                              variant="body2"
                              component="p"
                              style={{
                                color: "dimgrey",
                                fontSize: "13.5px",
                                letterSpacing: "0.7px",
                                textAlign: "justify",
                                lineHeight: "1.5",
                              }}
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