import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../AddToCart/AddToCart.module.scss";
import { Divider } from "@mui/material";
import { MainButton } from "../../../../UI/Button/Button";
import Select from "react-select";

import data from "../../../../assets/StateCity";

const AddToCart = () => {
  const navigate = useNavigate();

  const [seltectOption, setSelectOption] = useState();

  const handleRedirect = () => {
    navigate("/chestoBuy/buyNow");
  };

  const colorStyles = {
    option: (styles, state) => {
      return {
        ...styles,
        borderBottom: "1px solid gray",
        color: state.isSelected ? "black" : "blue",
        backgroundColor: state.data.color,
      };
    },
  };

  return (
    <div className={classes.AddToCartContainer}>
      <div className={classes.mainContainer}>
        <div className={classes.cartFirstRow}>
          <div className={classes.MyCartContainer}>
            <div className={classes.cartHeaderContainer}>
              <h4 style={{ margin: "15px", textAlign: "left" }}>My Cart</h4>
              <div className={classes.shoppingButton}>
                <MainButton
                  style={{
                    margin: "10px",
                    borderRadius: "15px",
                    padding: "5px 10px",
                    fontSize: "14px",
                  }}
                  onClick={handleRedirect}
                >
                  CONTINUE SHOPPING
                </MainButton>
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
                    color: "black",
                    backgroundColor: "#6EC1E4",
                    border: "none",
                  }}
                >
                  Update Cart
                </MainButton>
              </div>
            </div>
            <Divider />
            <div className={classes.checkOutContainer}>
              <MainButton
                style={{
                  marginTop: 0,
                  borderRadius: "15px",
                  padding: "5px 10px",
                  fontSize: "17px",
                }}
              >
                PROCEED TO CHECKOUT
              </MainButton>
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
              <div className={classes.Details}>
                <div className={classes.label}>Price Of Item</div>
                <div>&#x20b9; 8000/-</div>
              </div>
              <div className={classes.Details}>
                <div className={classes.label}>Discount</div>
                <div>&#x20b9; 10/-</div>
              </div>
              <div className={classes.Details}>
                <div className={classes.label}>Delivery Charges</div>
                <div>&#x20b9; 100/-</div>
              </div>
              <Divider />
              <div className={classes.Details}>
                <div className={classes.totalLabel}>Total Amount</div>
                <div>&#x20b9; 8000/-</div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.cartSecondrow}>
          <div className={classes.ShippingContainer}>
            <div className={classes.shippingHeader}>
              <h4 style={{ margin: 0, padding: "15px", textAlign: "left" }}>
                Shipping Details
              </h4>
            </div>
            <Divider />
            <div className={classes.shippingContent}>
              <div className={classes.billingContent}>
                <div className={classes.nameContainer}>
                  <div>
                    <label>First Name :-</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div>
                    <label>Last Name :-</label>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div>
                  <label>Company Name :-</label>
                  <input type="text" placeholder="Company Name" />
                </div>
                <div>
                  <label>Street Address :-</label>
                  <input
                    type="text"
                    placeholder="House number and street name"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suits, unit, etc.(Optional)"
                  />
                </div>
                <div className={classes.addressDetail}>
                  <div>
                    <label>Pin Code :-</label>
                    <input type="text" placeholder="Pin Code" />
                  </div>
                  <div>
                    <label>City/Town :-</label>
                    <input type="text" placeholder="City" />
                  </div>
                  <div>
                    <label>State :-</label>
                    <input type="text" placeholder="State" />
                  </div>
                </div>
                <div className={classes.ContactContainer}>
                <div>
                  <label>Phone Number :-</label>
                  <input type="text" placeholder="Mobile Number " />
                </div>
                <div>
                  <label>E-Mail :-</label>
                  <input type="email" placeholder="Email Address" />
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className={classes.billingContainer}>
            <div className={classes.billingHeader}>
              <h4 style={{ margin: 0, padding: "15px", textAlign: "left" }}>
                Billings Details
              </h4>
            </div>
            <Divider />
            <div className={classes.billingContent}>
              <div className={classes.nameContainer}>
                <div>
                  <label>First Name :-</label>
                  <input type="text" placeholder="First Name" />
                </div>
                <div>
                  <label>Last Name :-</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div>
                <label>Company Name :-</label>
                <input type="text" placeholder="Company Name" />
              </div>
              <div>
                <label>Street Address :-</label>
                <input type="text" placeholder="House number and street name" />
                <input
                  type="text"
                  placeholder="Apartment, suits, unit, etc.(Optional)"
                />
              </div>
              <div className={classes.addressDetail}>
                <div>
                  <label>Pin Code :-</label>
                  <input type="text" placeholder="Pin Code" />
                </div>
                <div>
                  <label>City/Town :-</label>
                  <input type="text" placeholder="City" />
                </div>
                <div>
                  <label>State :-</label>
                  <input type="text" placeholder="State" />
                </div>
              </div>
              <div className={classes.ContactContainer}>
                <div>
                  <label>Phone Number :-</label>
                  <input type="text" placeholder="Mobile Number " />
                </div>
                <div>
                  <label>E-Mail :-</label>
                  <input type="email" placeholder="Email Address" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
