import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/style.css";

import {
  ProductSectionLinks,
  LatestProducts,
  RelatedProducts,
  NewsPanel,
} from "./Path";
import useStyles from "../css/SectionHeaderStyle";

// Material-Ui Components
import { Container, Grid } from "@material-ui/core";

// Icons & Media
import StopIcon from "@material-ui/icons/Stop";

const SectionHeader = (props) => {
  const classes = useStyles();
  const [sectionLinks, setSectionLinks] = useState([]);

  // Links Filtering
  useEffect(() => {
    if (props.title === "latestProducts") {
      setSectionLinks([...LatestProducts]);
    } else if (props.title === "relatedProducts") {
      setSectionLinks([...RelatedProducts]);
    } else if (props.title === "productDetailsSections") {
      setSectionLinks([...ProductSectionLinks]);
    } else if (props.title === "newsPanel") {
      setSectionLinks([...NewsPanel]);
    }
  }, [props]);

  return (
    <>
      <Container className={classes.sectionHead}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          {[...sectionLinks].map((linkItem) => {
            return (
              <>
                <Grid className={classes.sectionHeadItem} key={linkItem.id}>
                  <NavLink
                    to={linkItem.path}
                    exact
                    className={classes.sectionHeadTitle}
                    activeClassName={classes.activeSectionHeadTitle}
                  >
                    <StopIcon className={classes.sectionHeadIcon} />
                    <span>{linkItem.name}</span>
                  </NavLink>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default SectionHeader;
