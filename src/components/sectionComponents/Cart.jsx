import React, { useState, useEffect } from "react";
import "../css/style.css";
import useStyles from "../css/CartStyle";
import Breadcrumb from "./Breadcrumb";

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
import CartImg1 from "../../media/products/iPhone/iphone1.jpeg";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from '@mui/icons-material/Clear';

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData("Frozen yoghurt", 159, 250.99, 24, 250.99),
  createData("Ice cream sandwich", 237, 250.99, 37, 250.99),
  createData("Eclair", 262, 250.99, 24, 250.99),
];

const Cart = () => {
  const classes = useStyles();
  const [prodQty, setProdQty] = useState(1);
  const [prodInStock, setProdInStock] = useState(7);

  useEffect(() => {
    setProdInStock(7);
  }, []);

  const handleQty = (operation) => {
    if (operation === "+") {
      if (prodQty < prodInStock) setProdQty(prodQty + 1);
    } else {
      if (prodQty > 1) setProdQty(prodQty - 1);
    }
  };

  return (
    <>
      {/* Cart Breadcrumb */}
      <Breadcrumb />

      <Grid container className={classes.root} sm={11} xs={12}>
        {/* Cart Items Table */}
        <TableContainer
          component={Paper}
          className={classes.cartItemBox}
          data-box="cartBox"
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.cartTableHead}>
                <TableCell>Product</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="center">Unit Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...rows].map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.cartItemImgBox}
                  >
                    <img src={CartImg1} alt="Cart Item" />
                  </TableCell>
                  <TableCell>
                    <Typography variantMapping="p">{row.name}</Typography>
                    <Typography className={classes.colorSize}>
                      White / 6.25
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.cartItemPrice} align="center">
                    <span>$</span>
                    {row.fat}
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
                          onClick={() => handleQty("-")}
                        >
                          <RemoveIcon />
                        </Button>
                        <input
                          className={classes.quantityInputField}
                          type="number"
                          name="prodQtyId"
                          id="prodQtyId"
                          value={prodQty}
                        />
                        <Button
                          className={classes.quantityButtons}
                          onClick={() => handleQty("+")}
                        >
                          <AddIcon />
                        </Button>
                      </ButtonGroup>
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.cartItemPrice} align="center">
                    <span>$</span>
                    {row.protein}
                  </TableCell>
                  <TableCell align="center">
                    <Button className={classes.cartItemRemoveBtn}><ClearIcon /></Button>
                  </TableCell>
                </TableRow>
              ))}

              {/* Continue Shopping Row */}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" colSpan={3}>
                  <Button contained="filled" className={classes.cartButtons}>
                    Continue Shopping
                  </Button>
                </TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Shipping (+7$)"
                    />
                  </FormGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Continue Shopping */}

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
                  <TableCell align="right" className={classes.billingItemPrice}>
                    <span>$</span>250.99
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
                    <span>$</span>0
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
                  <TableCell align="right" className={classes.billingItemPrice}>
                    <span>$</span>250.99
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
    </>
  );
};

export default Cart;
