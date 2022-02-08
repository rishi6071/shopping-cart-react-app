import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "15px auto",
    padding: "0px 20px",
    "& *": {
      fontFamily: "Archivo, sans-serif",
    },
  },
  filterBox: {
    padding: "5px 15px 5px 8px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 30,
    }
  },
  filterHead: {
    paddingLeft: 10,
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginTop: 20,
    marginBottom: 10,
    "& span": {
      fontSize: "11px",
      color: "dimgrey",
      marginLeft: 5,
    },
  },
  categoryName: {
    fontSize: "14.5px",
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
  },
  sliderBox: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  ratingBox: {
    display: "block !important",
    paddingLeft: 15,
    paddingRight: 15,
  },
  ratingLayer: {
    marginTop: 2.5,
    display: "flex",
    "& > span:nth-child(2)": {
      marginLeft: 9,
      paddingTop: 2.3,
      color: "dimgrey",
    },
  },
  paginationBox: {
    marginTop: 20,
    marginBottom: 30,
  },
}));

const categories = [
  {
    id: "category1",
    name: "Mobile",
    inStock: "35",
  },
  {
    id: "category2",
    name: "Headphone",
    inStock: "55",
  },
  {
    id: "category3",
    name: "Laptop",
    inStock: "15",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default useStyles;
export { categories, valuetext };
