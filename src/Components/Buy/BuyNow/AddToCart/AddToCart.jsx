import React from "react";
import classes from "../AddToCart/AddToCart.module.scss";
import { Divider } from "@mui/material";
import { MainButton } from "../../../../UI/Button/Button";

const AddToCart = () => {
  return (
    <div className={classes.AddToCartContainer}>
      <div className={classes.mainContainer}>
        <div className={classes.MyCartContainer}>
          <div className={classes.cartHeaderContainer}>
            <h4 style={{ margin: 0, padding: "15px", textAlign: "left" }}>
              My Cart
            </h4>
            <div className={classes.shoppingButton}>
              <button>
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
          <Divider />
          <div className={classes.shoppingTableContainer}>
            <table className={classes.shoppingTabel}>
              <thead style={{ color: "#6EC1E4" }}>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                </tr>
              </tbody>
            </table>
            <div className={classes.updateCartButton}>
              <MainButton
                style={{
                  marginTop: "20px",
                  borderRadius: "15px",
                  padding: "5px 10px",
                  fontSize: "15px",
                }}
              >
                Update Cart
              </MainButton>
            </div>
          </div>
        </div>

        <div className={classes.paymentContainer}>
          <div className={classes.paymentHeaderContainer}>
            <h4 style={{ margin: 0, padding: "15px", textAlign: "left" }}>
              Payment Details
            </h4>
          </div>
          <Divider />
          <div className={classes.paymentDetailTable}>
            <table>
              <tr>
                <th>Subtotal Price</th>
                <td>subtotal price</td>
              </tr>
              <tr>
                <th>Delivery Charges</th>
                <td>100</td>
              </tr>
              <br />
              <Divider />
              <tr>
                <th>Total Amount</th>
                <td>10000</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className={classes.shippingContainer}>
        <div className={classes.shippingHeaderContainer}>
          <h4 style={{ margin: 0, padding: "15px", textAlign: "left" }}>
            Shipping Details
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
