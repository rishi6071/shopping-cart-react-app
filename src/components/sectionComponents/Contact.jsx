import React from "react";
import useStyles, { faqData } from "../css/ContactStyle";

// Material-UI Components
import { Grid, Typography, Link, TextField, Button } from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

// Material-UI Icons
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        {/* Contact Details */}
        <Grid item md={6} className={classes.contactDetails}>
          <Typography variant="h5" className={classes.getInTouch}>
            Get in Touch
          </Typography>

          <Grid container className={classes.socialMediaIconsBox}>
            <Grid>
              <Link href="#" className={classes.socialMediaItem}>
                <LinkedInIcon style={{ color: "#0077B4" }} />
              </Link>
            </Grid>
            <Grid>
              <Link href="#" className={classes.socialMediaItem}>
                <FacebookIcon style={{ color: "#4867AA" }} />
              </Link>
            </Grid>
            <Grid>
              <Link href="#" className={classes.socialMediaItem}>
                <TwitterIcon style={{ color: "#5DA9DD" }} />
              </Link>
            </Grid>
            <Grid>
              <Link href="#" className={classes.socialMediaItem}>
                <YouTubeIcon color="secondary" />
              </Link>
            </Grid>
          </Grid>

          <Grid container style={{ marginTop: 20 }}>
            <form action="#" method="get">
              <Grid>
                <TextField
                  id="contactName"
                  label="Name"
                  variant="outlined"
                  size="small"
                  className={classes.contactInputField}
                />
              </Grid>
              <Grid>
                <TextField
                  id="contactEmail"
                  label="Email"
                  variant="outlined"
                  size="small"
                  className={classes.contactInputField}
                />
              </Grid>
              <Grid>
                <TextField
                  id="contactMessage"
                  label="Message"
                  variant="outlined"
                  size="small"
                  className={classes.contactInputField}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  className={classes.contactSubmitButton}
                >
                  Send
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>

        {/* Contact Map */}
        <Grid item md={6} style={{ margin: "auto" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14723.890194393827!2d75.82225400922567!3d22.69206581440997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc4ba88d9735%3A0x20b7ae13a5b8a1d3!2sSudama%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452009!5e0!3m2!1sen!2sin!4v1632565971102!5m2!1sen!2sin"
            className={classes.contactMap}
            allowfullscreen=""
            loading="lazy"
            title="Office Address"
          ></iframe>
        </Grid>
      </Grid>

      <Grid container className={classes.root}>
        {/* FAQ Heading */}
        <Grid container justifyContent="center">
          <Typography variant="h5" className={classes.faqHead}>
            <span>FAQs</span>
            <span></span>
          </Typography>
        </Grid>

        {/* FAQs Q&A */}
        <Grid container alignItems="center" direction="column">
          <Grid container justifyContent="center" xl={6} md={8} sm={10} xs={12}>
            {[...faqData].map((faqItem) => {
              return (
                <>
                  <Accordion key={faqItem.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={"faq-content-" + faqItem.id}
                      id={"faq-header-" + faqItem.id}
                    >
                      <Typography>
                        <DoubleArrowIcon className={classes.faqIcon} />
                        {faqItem.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.faqAnswer}>
                        W3Schools maintains a complete JavaScript reference. Web
                        pages are not the only place where JavaScript is used.
                        Many desktop and server programs use JavaScript. Node.js
                        is the best known. Some databases, like MongoDB and
                        CouchDB, also use JavaScript as their programming
                        language.'
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;