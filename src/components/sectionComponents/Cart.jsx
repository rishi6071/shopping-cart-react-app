import React from "react";
import "../css/style.css";
import useStyles from "../css/CartStyle";
import { Link } from "react-router-dom";

// Custom Components
import Breadcrumb from "./Breadcrumb";
import { formatPrice } from "../HomePage";

// Material-UI Components
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography, ButtonGroup, Button } from "@material-ui/core";

// Media
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import EmptyCart from "../../media/empty_cart.png";

const Cart = (props) => {
  const classes = useStyles();
  const { cart, handleUpdateInCart, handleRemoveFromCart } = props;

  const updateCartWithValidation = (opr, item_id, qty) => {
    if (opr === "+") {
      handleUpdateInCart(item_id, qty + 1);
    } else if (opr === "-") {
      if (qty === 1) handleRemoveFromCart(item_id);
      else handleUpdateInCart(item_id, qty - 1);
    }
  };

  return (
    <>
      {/* Cart Breadcrumb */}
      <Breadcrumb />

      {cart.total_unique_items > 0 ? (
        <Grid container className={classes.root} sm={11} xs={12}>
          {/* Cart Items Table */}
          <TableContainer
            component={Paper}
            className={classes.cartItemBox}
            data-box="cartBox"
            id={cart.id}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className={classes.cartTableHead}>
                  <TableCell align="center">Product</TableCell>
                  <TableCell style={{ minWidth: 150 }}>Name</TableCell>
                  <TableCell align="center">Unit Price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Total</TableCell>
                  <TableCell align="center">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...cart.line_items].map((product) => (
                  <TableRow
                    key={product.id}
                    id={product.product_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.cartItemImgBox}
                    >
                      <img
                        src={product ? product.image.url : ``}
                        alt={product.product_name}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variantMapping="p">
                        {product.product_name}
                      </Typography>
                      {/* <Typography className={classes.colorSize}>
                      White / 6.25
                    </Typography> */}
                    </TableCell>
                    <TableCell className={classes.cartItemPrice} align="center">
                      {product
                        ? formatPrice(product.price.formatted_with_symbol)
                        : ``}
                    </TableCell>
                    <TableCell align="center">
                      <Typography className={classes.productQuantityField}>
                        <ButtonGroup
                          size="medium"
                          aria-label="small button group"
                          style={{ transform: "translateY(5px)" }}
                        >
                          <Button
                            className={classes.quantityButtons}
                            onClick={() => {
                              updateCartWithValidation(
                                "-",
                                product.id,
                                product.quantity
                              );
                            }}
                          >
                            <RemoveIcon />
                          </Button>
                          <input
                            className={classes.quantityInputField}
                            type="number"
                            name="prodQtyId"
                            id="prodQtyId"
                            value={product.quantity}
                            readOnly
                          />
                          <Button
                            className={classes.quantityButtons}
                            onClick={() => {
                              updateCartWithValidation(
                                "+",
                                product.id,
                                product.quantity
                              );
                            }}
                          >
                            <AddIcon />
                          </Button>
                        </ButtonGroup>
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.cartItemPrice} align="center">
                      {product
                        ? formatPrice(product.line_total.formatted_with_symbol)
                        : ``}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        className={classes.cartItemRemoveBtn}
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        <ClearIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}

                {/* Continue Shopping Row */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" colSpan={3}>
                    <Button
                      component={Link}
                      to="/shop"
                      contained="filled"
                      className={classes.cartButtons}
                    >
                      Continue Shopping
                    </Button>
                  </TableCell>
                  <TableCell colSpan={3}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Shipping (+ ₹150)"
                      />
                    </FormGroup>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Billing */}
          <Grid container className={classes.billingBox} md={6} sm={8} xs={11}>
            <Typography variantMapping="p" className={classes.billingHead}>
              Cart Totals
            </Typography>

            <TableContainer component={Paper} style={{ boxShadow: "none" }}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.billingItemHead}
                    >
                      Subtotal
                    </TableCell>
                    <TableCell
                      align="right"
                      className={classes.billingItemPrice}
                    >
                      {cart.subtotal ? cart.subtotal.formatted_with_symbol : ``}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.billingItemHead}
                    >
                      Shipping
                    </TableCell>
                    <TableCell align="right" className={classes.shippingPrice}>
                      <span>₹</span>0
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.billingItemHead}
                    >
                      Total
                    </TableCell>
                    <TableCell
                      align="right"
                      className={classes.billingItemPrice}
                    >
                      {cart.subtotal ? cart.subtotal.formatted_with_symbol : ``}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Button contained="filled" className={classes.cartButtons}>
              Proceed To Checkout
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container className={classes.root} sm={11} xs={12}>
          <Grid container className={classes.emptyCartBox}>
            <img src={EmptyCart} alt="EmptyCart" />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Cart;
