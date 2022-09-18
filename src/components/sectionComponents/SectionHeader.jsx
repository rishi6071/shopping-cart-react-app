import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/style.css";

import { ProductSectionLinks, NewsPanel } from "./Path";
import useStyles from "../css/SectionHeaderStyle";

// Material-Ui Components
import { Container, Grid } from "@material-ui/core";

// Icons & Media
import StopIcon from "@material-ui/icons/Stop";

const SectionHeader = (props) => {
  const classes = useStyles();
  const { title, productId } = props;
  const [sectionLinks, setSectionLinks] = useState([]);

  // Links Filtering
  useEffect(() => {
    if (title === "productDetailsSections") {
      for (let i = 0; i < ProductSectionLinks.length; i++) {
        ProductSectionLinks[i].path = ProductSectionLinks[i].path.replace("/1", `/${productId}`);
      }
      setSectionLinks([...ProductSectionLinks]);
    } else if (title === "newsPanel") {
      setSectionLinks([...NewsPanel]);
    } else {
      setSectionLinks([{ id: `commercejs_${title}`, name: `${title}`, path: `#` }]);
    }
  }, [title, productId]);

  return (
    <Container className={classes.sectionHead}>
      <Grid container justifyContent="center" alignItems="center" direction="row">
        {[...sectionLinks].map((linkItem) => {
          return (
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
          );
        })}
      </Grid>
    </Container>
  );
};

export default SectionHeader;
