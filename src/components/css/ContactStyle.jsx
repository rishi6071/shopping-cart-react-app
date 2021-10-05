import { makeStyles } from "@material-ui/core";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 40px",
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  contactDetails: {
    padding: "15px 50px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 10px 25px 10px",
    },
  },
  getInTouch: {
    fontWeight: "bolder",
    fontFamily: "'Josefin Sans', sans-serif",
    fontVariant: "small-caps",
    marginTop: 0,
    color: "#515490",
  },
  socialMediaIconsBox: {
    marginTop: 20,
    marginBottom: -5,
    gap: 14,
  },
  socialMediaItem: {
    "& *": {
      fontSize: "30px",
      transition: "0.5s",
    },
    "&:hover *": {
      transform: "translateY(-2px)",
    },
  },
  contactInputField: {
    marginTop: 20,
    width: 480,
    [theme.breakpoints.down("md")]: {
      width: 380,
    },
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  contactSubmitButton: {
    padding: "6px 35px",
    marginTop: 22,
    background: "transparent",
    letterSpacing: "1px",
    border: "1px solid rgba(118, 118, 118, 0.6)",
    boxShadow: "none",
    color: "grey",
    fontWeight: "500",
    "&:focus": {
      boxShadow: "none",
    },
    "&:hover": {
      boxShadow: "none",
      color: "white",
      background: "#515490",
    },
  },
  contactMap: {
    border: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    boxShadow: "0px 0px 8px lightgrey",
    width: "100%",
    height: 450,
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  // FAQs
  faqHead: {
    fontWeight: "bolder",
    color: "#515490",
    fontFamily: "'Josefin Sans', sans-serif",
    letterSpacing: "0.8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 30,
    "& span:nth-child(2)": {
      border: "2px solid transparent",
      marginTop: 1,
      borderRadius: 20,
      background: "rebeccapurple",
      width: 90,
      transform: "translateX(-14px)",
    },
  },
  faqIcon: {
    marginRight: 10,
    transform: "translateY(6px)",
  },
  faqAnswer: {
    fontSize: "14.3px",
    color: "dimgrey",
    lineHeight: "1.7",
    [theme.breakpoints.up("sm")]: {
      textIndent: "20px",
    },
  },
}));

const faqData = [
  {
    id: 1,
    question: "What payment methods do you accept?",
    answer:
      "W3Schools maintains a complete JavaScript reference. Web pages are not the only place where JavaScript is used. Many desktop and server programs use JavaScript. Node.js is the best known. Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language.'",
  },
  {
    id: 2,
    question: "Do you sell Gift Cards?",
    answer:
      "W3Schools maintains a complete JavaScript reference. Web pages are not the only place where JavaScript is used. Many desktop and server programs use JavaScript. Node.js is the best known. Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language.'",
  },
  {
    id: 3,
    question: "How do i purchase a Gift Card?",
    answer:
      "W3Schools maintains a complete JavaScript reference. Web pages are not the only place where JavaScript is used. Many desktop and server programs use JavaScript. Node.js is the best known. Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language.'",
  },
  {
    id: 4,
    question: "Why haven't i recieved my Gift Card?",
    answer:
      "W3Schools maintains a complete JavaScript reference. Web pages are not the only place where JavaScript is used. Many desktop and server programs use JavaScript. Node.js is the best known. Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language.'",
  },
  {
    id: 5,
    question: "I've lost my Gift Card, can i get a replacement?",
    answer:
      "W3Schools maintains a complete JavaScript reference. Web pages are not the only place where JavaScript is used. Many desktop and server programs use JavaScript. Node.js is the best known. Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language.'",
  },
];

export default useStyles;
export { faqData };
