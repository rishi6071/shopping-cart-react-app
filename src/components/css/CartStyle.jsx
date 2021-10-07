import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  cartItemImg: {
    height: "200px !important",
    "& img": {
      maxWidth: "100%",
      height: "200px !important",
    }
  }
}));

export default useStyles;
