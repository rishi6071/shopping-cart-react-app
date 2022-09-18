import React from "react";
import "../css/style.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import useStyles, { RatanTata, ElonMusk, SteveJobs } from "../css/QuotesPolicyStyle";

// Material-UI Components
import { Typography, Grid } from "@material-ui/core";

// Icons & Media
import FlightIcon from "@material-ui/icons/Flight";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";

const QuotesPolicy = () => {
  const classes = useStyles();

  /** Policies Data */
  const policies = [
    {
      id: 1,
      name: "FREE SHIPPING WORLD WIDE",
      icon: <FlightIcon className={classes.policyIcon} />,
    },
    {
      id: 2,
      name: "100% MONEY BACK GUARANTEE",
      icon: <LocalAtmIcon className={classes.policyIcon} />,
    },
    {
      id: 3,
      name: "MANY PAYMENT GATEWAYS",
      icon: <CreditCardIcon className={classes.policyIcon} />,
    },
    {
      id: 4,
      name: "24/7 ONLINE SUPPORT",
      icon: <HeadsetMicOutlinedIcon className={classes.policyIcon} />,
    },
  ];

  /** Quotes Data */
  const quotes = [
    {
      id: 1,
      quoteLine: `Apart from values and ethics which I have tried to live by the legacy I would like to leave behind is a very simple one that I have always stood up for what I consider to be the right thing, and I have tried to be as fiar and equitable as I could be.`,
      img: RatanTata,
      writtenBy: `Ratan Tata`,
      designation: `Founder at Tata Group`,
    },
    {
      id: 2,
      quoteLine: `I  think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better. I think that's the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.`,
      img: ElonMusk,
      writtenBy: `Elon Musk`,
      designation: `CEO at Tesla, SpaceX, & more`,
    },
    {
      id: 3,
      quoteLine: `Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.`,
      img: SteveJobs,
      writtenBy: `Steve Jobs`,
      designation: `Founder at Apple`,
    },
  ];

  return (
    <>
      {/* Policy Section */}
      <Grid container className={classes.policyGridBox} id="quotes__policy">
        <Grid container>
          {[...policies].map((policy) => {
            return (
              <Grid item lg={3} xs={6} align="center" className={classes.policyBox} key={policy.id}>
                <Typography className={classes.policyIconBox}>
                  <span className={classes.policyIconSpan}>{policy.icon}</span>
                </Typography>
                <Typography className={classes.policyName}>{policy.name}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      {/* Quotes Section */}
      <Grid container direction="row" justifyContent="center" className={classes.quotesGridBox}>
        <AliceCarousel
          autoPlay
          animationDuration="1000"
          disableButtonsControls="false"
          autoPlayInterval={2000}
          infinite
          responsive={{
            1900: {
              items: 4,
            },
          }}
          mouseTracking="false"
          items={[...quotes].map((quote) => {
            return (
              <Grid item className={classes.quoteItemBox} key={quote.id}>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item md={8} sm={10} xs={12} className={classes.quoteContentBox}>
                    <Typography className={classes.quoteImg}>
                      <img src={quote.img} alt={quote.writtenBy} loading="lazy" />
                    </Typography>
                    <Typography className={classes.quoteLines}>“{quote.quoteLine}”</Typography>
                    <Typography variant="h6">{quote.writtenBy}</Typography>
                    <Typography className={classes.quoteByDesignation}>{quote.designation}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        />
      </Grid>
    </>
  );
};

export default QuotesPolicy;
