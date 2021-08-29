import React from "react";
import "./css/style.css";
import useStyles from "./css/NewsGridStyle";

// Material-Ui Components
import { Container, Grid, Typography } from "@material-ui/core";

// Icons & Media
import StopIcon from "@material-ui/icons/Stop";

const SectionHeader = (props) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.newsHead}>
        <Grid container justifyContent="center">
          <StopIcon className={classes.newsHeadIcon} />
          <Typography className={classes.newsHeadTitle}>{props.title}</Typography>
        </Grid>
      </Container>
    </>
  );
};

export default SectionHeader;
