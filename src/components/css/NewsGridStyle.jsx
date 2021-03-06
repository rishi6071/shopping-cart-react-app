import { makeStyles } from "@material-ui/core/styles";

// NewsGrid Random Images
import Img1 from "../../media/NewsImgs/r1.jpg";
import Img2 from "../../media/NewsImgs/r2.jpg";
import Img3 from "../../media/NewsImgs/r3.jpg";
import Img4 from "../../media/NewsImgs/r4.jpg";
import Img5 from "../../media/NewsImgs/r5.jpg";
import Img6 from "../../media/NewsImgs/r6.jpg";
import Img7 from "../../media/NewsImgs/r7.jpg";
import Img8 from "../../media/NewsImgs/r8.jpg";
import Img9 from "../../media/NewsImgs/r9.jpeg";
import Img10 from "../../media/NewsImgs/r10.jpeg";

const newsRandImgs = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
];

const responsiveNewsCards = {
  0: { items: 1 },
  550: { items: 2 },
  767: { items: 3 },
  1100: { items: 4 },
  1900: { items: 5 },
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 50,
    [theme.breakpoints.up("md")]: {
      marginTop: 30,
    },
  },
  paddingPart: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  newsBtn: {
    width: 135,
    borderRadius: 0,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15,
    background: "transparent",
    color: "black",
    border: "1px solid black",
    fontWeight: "300",
    letterSpacing: "1px",
    transition: "0.5s",
    boxShadow: "none",
    "&:hover": {
      background: "black",
      color: "white",
    },
  },
  newsContentBox: {
    height: 170,
    overflowY: "auto",
    paddingRight: "10px !important",
  },
  newCarouselImg: {
    height: 200,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
  newsName: {
    fontWeight: "600",
    fontSize: "15.5px",
    letterSpacing: "0.5px",
  },
  newsSource: {
    fontStyle: "italic",
    marginBottom: "8px",
    fontSize: "12.5px",
    color: "rgba(0,0,0,0.85)",
  },
  newsDescription: {
    color: "dimgrey",
    fontSize: "13.2px",
    letterSpacing: "0.7px",
    lineHeight: 1.5,
    marginTop: 5,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "black",
  },
  // Horizontal News Cards
  horizontalNewsContentBox: {
    height: 170,
    overflowY: "auto",
    paddingRight: "15px !important",
    [theme.breakpoints.down("sm")]: {
      height: 180,
    },
  },
  horizontalNewsBtn: {
    borderRadius: 0,
    padding: "1px 10px",
    marginTop: 10,
    fontSize: "12.5px",
    background: "transparent",
    color: "black",
    border: "1px solid black",
    fontWeight: "300",
    letterSpacing: "1px",
    transition: "0.5s",
    boxShadow: "none",
    "&:hover": {
      background: "black",
      color: "white",
    },
  },
}));

export default useStyles;
export { newsRandImgs, responsiveNewsCards };
