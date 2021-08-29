import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import useStyles from "./css/NewsGridStyle";

// Material-UI Components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Glide, { Slide } from "react-glidejs";

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

  return (
    <>
      <div className={classes.root}>
        <Glide
          type="carousel"
          perView={3}
          startAt={0}
          gap={1}
          rewin="false"
          animationDuration="800"
          animationTimingFunc="cubic-bezier(0.165, 0.840, 0.440, 1.000)"
          customSlideAnimation={{
            timeout: 500,
            classNames: "fade",
          }}
          hoverPause="true"
        >
          {[...newsData].map((newsfeed) => {
            return (
              <>
                <Fragment>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="News_Article"
                        height="250"
                        image="https://lh3.googleusercontent.com/proxy/h1usQHaRRfUBfVGM-OI5Vp2ry0htc3UkxQ2quXXHZRO_ExOk3HpO4b67FSBkd03dc9eDWeEhRffMSOxTMUMSQD63qZ6jsZ4vjUGYi_et6KD-7b1Js-dfbHpRgdUQjBoBbQ"
                        title="Contemplative Reptile"
                      />
                      <CardContent style={{ padding: "20px 20px 25px 20px" }}>
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
                        <Typography variantMapping="p" style={{fontStyle: "italic", marginBottom: "8px"}}>
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
                        <Button variant="contained" className={classes.newsBtn}>
                          Read More
                        </Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Fragment>
              </>
            );
          })}
        </Glide>
      </div>

      {/* <div className={classes.root}>
        <Grid container>
          {[...newsData].map((newsfeed) => {
            return (
              <>
                <Grid item md={4}>
                  <Card style={{margin: "20px 15px"}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="News_Article"
                        height="250"
                        image="https://lh3.googleusercontent.com/proxy/h1usQHaRRfUBfVGM-OI5Vp2ry0htc3UkxQ2quXXHZRO_ExOk3HpO4b67FSBkd03dc9eDWeEhRffMSOxTMUMSQD63qZ6jsZ4vjUGYi_et6KD-7b1Js-dfbHpRgdUQjBoBbQ"
                        title="Contemplative Reptile"
                      />
                      <CardContent style={{ padding: "20px 20px 25px 20px" }}>
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
                          style={{ fontStyle: "italic", marginBottom: "8px" }}
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
                        <Button variant="contained" className={classes.newsBtn}>
                          Read More
                        </Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
     */}
    </>
  );
};

export default NewsGrid;
