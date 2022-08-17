import React, { useContext, useRef } from "react";
import classes from "../Invoice/Invoice.module.css";
import { Divider, Typography } from "@mui/material";
import CartContext from "../../../../../ContextAPI/Context";
import ReactToPrint from "react-to-print";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  const printItem = useRef();

  const goBackToHome = () => {
    navigate("/");
    cart.cart.length = 0;
  };

  let total = 0;
  cart.cart.map((item) => {
    total = total + item.selectedOption.discountPrice;
  });

  let subTotal = 0;
  cart.cart.map((item) => {
    subTotal = subTotal + item.selectedOption.discountPrice * item.counter;
  });

  let totalQuantity = 0;
  cart.cart.map((item) => {
    totalQuantity = totalQuantity + item.counter;
  });

  let actualAmount = totalQuantity * 14999;
  let discount = actualAmount - subTotal;
  let Charges = 200;
  let gst = (subTotal * 12) / 100;
  let payableAmount = subTotal + Charges + gst;

  return (
    <div className={classes.invoiceContainer}>
      <div className={classes.printContainer}>
        <div>
          <button className={classes.backButton} onClick={goBackToHome}>
            <MdArrowBack />
          </button>
        </div>
        <div className={classes.printButton}>
          <ReactToPrint
            trigger={() => (
              <button
                style={{
                  width: "80px",
                  height: "40px",
                  margin: "15px 20px",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "#839c83",
                }}
              >
                Print
              </button>
            )}
            content={() => printItem.current}
          />
        </div>
      </div>
      <div className={classes.mainContainer} ref={printItem}>
        <div className={classes.headerContainer}>
          <div className={classes.logoContainer}>
            <img
              src="https://www.fifthventricle.in/wp-content/uploads/elementor/thumbs/cropped-fifth-ventricle-full-paqadr3fkgfpd5gl63o14tejvzngica2atitjsjj7k.png"
              alt="logo"
              width="280px"
            />
          </div>
          <div className={classes.NameContainer}>
            <b>
              <h4 style={{ fontSize: "20px", padding: "4px 10px" }}>
                Fifth Ventricle Pvt. Ltd.
              </h4>
            </b>
            <h5 style={{ padding: "0px 10px" }}>
              202, Ananta Trendz, Gotri Laxmipura Road, Vadodara, 390021
            </h5>
            <h5 style={{ padding: "0px 10px" }}>
              Phone no: 9875275144 Email: hello@fifthventricle.in
            </h5>
          </div>
        </div>
        <div className={classes.taxInvoice}>
          <Divider className={classes.Divider} />
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: " #00B5F0",
              margin: "10px 0",
            }}
          >
            Invoice{" "}
          </Typography>
          <Divider className={classes.Divider} />
        </div>
        <div className={classes.invoiceDetail}>
          <div>
            <b>
              <h4 style={{ fontSize: "20px", padding: "4px 10px" }}>
                Bill To..
              </h4>
            </b>
          </div>
          <div className={classes.details}>
            <b>
              <h4 style={{ fontSize: "20px", padding: "4px 10px" }}>
                Invoice No.: 41
              </h4>
            </b>
            <b>
              <h4 style={{ fontSize: "20px", padding: "4px 10px" }}>
                Date: Tue Aug 09 2022
              </h4>
            </b>
            <b>
              <h4 style={{ fontSize: "20px", padding: "4px 10px" }}>
                Time: 12:45:45 PM
              </h4>
            </b>
          </div>
        </div>
        <div className={classes.invoiceTable}>
          <table className={classes.shoppingTabel}>
            <thead style={{ color: "#6EC1E4", backgroundColor: "#00b5f0" }}>
              <tr>
                <th className={classes.th}>#</th>
                <th className={classes.th}>Name</th>
                <th className={classes.th}>Quantity</th>
                <th className={classes.th}>MRP</th>
                <th className={classes.th}>Price/Unit</th>
                <th className={classes.th}>Amount</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "white" }}>
              {cart.cart.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      color: "black",
                      textAlign: "center",
                      padding: "10px 0px",
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{
                      color: "black",
                      textAlign: "center",
                      padding: "10px 0px",
                    }}
                  >
                    {item.selectedOption.slug}
                  </td>
                  <td
                    style={{
                      color: "black",
                      textAlign: "center",
                      padding: "10px 0px",
                    }}
                  >
                    {item.counter}
                  </td>
                  <td
                    style={{
                      color: "black",
                      textAlign: "center",
                      padding: "10px 0px",
                    }}
                  >
                    {item.selectedOption.actualPrice * item.counter}
                  </td>
                  <td
                    style={{
                      color: "black",
                      textAlign: "center",
                      padding: "10px 0px",
                    }}
                  >
                    &#x20b9; {item.selectedOption.discountPrice}
                  </td>
                  <td
                    style={{
                      color: "black",
                      textAlign: "center",
                      padding: "10px 0px",
                    }}
                  >
                    &#x20b9;
                    {item.selectedOption.discountPrice * item.counter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={classes.belowContainer}>
          <div className={classes.tndContainer}>
            <h3 className={classes.h3}>Invoice Amount In Words:</h3>
            <h5 style={{ padding: "0px 10px" }}>Seven Thousand Rupees only</h5>
            <h3 className={classes.h3}>Terms and conditions:</h3>
            <h5 style={{ padding: "0px 10px" }}>
              Thanks for doing business with us!
            </h5>
            <h3 className={classes.h3}>Bank details:</h3>
            <h5 style={{ padding: "0px 10px" }}>
              Bank Name: HDFC BANK, GOTRI II
            </h5>
            <h5 style={{ padding: "0px 10px" }}>
              Bank Account No.: 50200061167127
            </h5>
            <h5 style={{ padding: "0px 10px" }}>Bank IFSC code: HDFC0003789</h5>
            <h5 style={{ padding: "0px 10px" }}>
              Account Holder Name: Fifth Ventricle Private Limited
            </h5>
          </div>
          <div className={classes.amountContainer}>
            <div className={classes.amountHeader}>Amount :-</div>
            <div className={classes.Details}>
              <div className={classes.label}>Actual Price</div>
              <div>&#x20b9; {actualAmount}/-</div>
            </div>
            <div className={classes.Details}>
              <div className={classes.label}>Quantity</div>
              <div>{totalQuantity} Pieces</div>
            </div>
            <div className={classes.Details}>
              <div className={classes.label}>Discount</div>
              <div>&#x20b9; -{discount}/-</div>
            </div>
            <div className={classes.Details}>
              <div className={classes.label}>SubTotal</div>
              <div>&#x20b9; {subTotal}/-</div>
            </div>
            <div className={classes.Details}>
              <div className={classes.label}>GST Amount</div>
              <div>&#x20b9; {gst}(12%)</div>
            </div>
            <div className={classes.Details}>
              <div className={classes.label}>Delivery Charges</div>
              <div>&#x20b9; {Charges}/-</div>
            </div>
            <Divider />
            <div className={classes.Details}>
              <div className={classes.totalLabel}>Payable Amount</div>
              <div>&#x20b9; {Math.round(payableAmount)}/-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
