import React from "react";
import useStyles from "../../../css/CheckoutFormStyle";

// Material-UI Components
import { Paper, Grid, Typography } from "@mui/material";

const YourOrders = ({ checkoutToken }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" className={classes.yourOrdersHeading}>
        Your Orders
      </Typography>

      {checkoutToken && checkoutToken.live ? (
        <div>
          {checkoutToken.live.line_items.map((product) => {
            return (
              <Grid
                container
                key={product.id}
                style={{
                  marginTop: 20,
                  paddingBottom: 10,
                  borderBottom: "1px solid #f1f1f1",
                }}
              >
                <Grid item xs={4} className={classes.checkoutItemImgBox}>
                  <div className={classes.orderImgBox}>
                    <img src={product.image.url} alt={product.product_name} />
                  </div>
                </Grid>
                <Grid item xs={8} className={classes.checkoutItemContentBox}>
                  <Typography
                    variantMapping="p"
                    className={classes.checkoutItemName}
                  >
                    {product.product_name}
                  </Typography>

                  <Typography
                    variantMapping="p"
                    className={classes.checkoutItemPrice}
                  >
                    {product.price.formatted_with_symbol} <span>X</span>{" "}
                    {product.quantity} <span>=</span>{" "}
                    {product.line_total.formatted_with_symbol}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}

          <Grid container className={classes.checkoutTotal}>
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h6" style={{ marginRight: 20 }}>
              {checkoutToken.live.total.formatted_with_symbol}
            </Typography>
          </Grid>
        </div>
      ) : (
        ``
      )}
    </Paper>
  );
};

export default YourOrders;
