import React, { useState, useEffect } from "react";
import "../css/style.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import useStyles, {
  newsRandImgs,
  responsiveNewsCards,
} from "../css/NewsGridStyle";
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

  const [showNewsGrid, setShowNewsGrid] = useState(false);
  const [showNewsCarousel, setShowNewsCarousel] = useState(false);

  // Filter Date Function
  const filterDate = (dateObj) => {
    const date = new Date(dateObj);
    return `${date.toDateString()}`;
  };

  // Filtering Resource Request
  useEffect(() => {
    if (props.newsCarousel !== undefined) setShowNewsCarousel(true);
    if (props.newsGridCards !== undefined) setShowNewsGrid(true);
    console.log(props.newsCarousel);
    console.log(props.newsGridCards);
  }, [props]);

  return (
    <>
      <div className={classes.root}>
        {/* NEWS Horizontal Cards */}
        <Grid
          container
          className={classes.paddingPart}
          style={{
            display: showNewsGrid === true ? "flex" : "none",
            marginBottom: 40,
          }}
          spacing={3}
        >
          {props.newsGridCards
            ? [...props.newsGridCards].map((newsCard, idx) => {
                return (
                  <>
                    <Grid
                      item
                      sm={6}
                      // style={{ margin: "15px" }}
                      key={`news_horizontal_card_${idx}`}
                      className="news_card_grid_item"
                    >
                      <Card>
                        <CardActionArea>
                          <Grid container>
                            <Grid item sm={5} xs={12}>
                              <CardMedia
                                component="img"
                                alt="News_Article"
                                height="100%"
                                image={
                                  newsRandImgs[
                                    Math.floor(
                                      Math.random() * newsRandImgs.length
                                    )
                                  ]
                                }
                              />
                            </Grid>
                            <Grid item sm={7} xs={12}>
                              <CardContent style={{ padding: "15px 0px 13px 18px" }}>
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
                                  href={newsCard.url}
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
              })
            : ``}
        </Grid>

        {/* NEWS AliceCarousel */}
        <SectionHeader
          title="newsPanel"
          style={{ display: showNewsCarousel === true ? "block" : "none" }}
        />
        <Grid
          container
          className={classes.paddingPart}
          style={{ display: showNewsCarousel === true ? "block" : "none" }}
        >
          <AliceCarousel
            autoPlay
            animationDuration="1000"
            disableButtonsControls="false"
            autoPlayInterval={2000}
            responsive={responsiveNewsCards}
            mouseTracking="false"
            items={[...props.newsCarousel].map((newsfeed, idx) => {
              return (
                <>
                  <Grid item key={`news_carousel_card_${idx}`} className="news_card_grid_item">
                    <Card style={{ margin: "20px 15px" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="News_Article"
                          className={classes.newCarouselImg}
                          image={
                            newsRandImgs[
                              Math.floor(Math.random() * newsRandImgs.length)
                            ]
                          }
                        />
                        <CardContent style={{ padding: "15px 0px 20px 15px" }}>
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
