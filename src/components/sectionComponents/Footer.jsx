import React from "react";
import { useLocation, Link } from "react-router-dom";

import useStyles, { footerLinksList } from "../css/FooterStyle";
import "../css/style.css";

// Material-UI Components
import { Grid, Typography, Button, List, ListItem } from "@material-ui/core";

// Icons & Media
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

const Footer = (props) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <footer>
      {/* Subscribe Section */}
      {location.pathname === "/" ? (
        <Grid container className={classes.subscribeGridBox}>
          <Grid item md={6} sm={12} className={classes.subscribeGridItem}>
            <Typography variant="h5" className={classes.subscribeHeading}>
              Subscribe to our NewsLetter
            </Typography>
            <Typography className={classes.subscribeSubHeading}>
              A short sentence describing what someone will receive by subscribing
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} className={classes.subscribeGridItem}>
            <Grid container justifyContent="center" alignItems="center" className={classes.subscribeInputGroup}>
              <Grid item sm={8} xs={12}>
                <input type="email" className={classes.subscribeInput} placeholder="Enter your email address..." />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Button className={classes.subscribeBtn}>Subscribe</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ``
      )}

      {/* Footer Section */}
      <Grid container className={classes.footerGridBox}>
        <Grid item xs={12} sm={6} className={classes.footerGridItem}>
          <Typography className={classes.footerHead}>INFORMATION</Typography>

          <List className={classes.footerItemList}>
            {[...footerLinksList].map((link, idx) => {
              return (
                <ListItem key={`footer_${idx + 1}`}>
                  <Link to={link.path} className={classes.footerItemLink}>
                    {link.name}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.footerGridItem}>
          <Typography className={classes.footerHead} id="contact_us_footer">
            CONTACT US
          </Typography>

          <List className={classes.footerItemList}>
            <ListItem style={{ lineHeight: 1.5 }}>
              <span>
                <LocationOnIcon />
              </span>{" "}
              42 Dream House, Dreammy street, 7131 Dreamville, USA
            </ListItem>
            <ListItem>
              <span>
                <EmailIcon />
              </span>{" "}
              company@gmail.com
            </ListItem>
            <ListItem>
              <span>
                <PhoneIcon />
              </span>{" "}
              456-456-4512
            </ListItem>
            <ListItem>
              <span>
                <SendIcon />
              </span>{" "}
              Dream City, USA
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
