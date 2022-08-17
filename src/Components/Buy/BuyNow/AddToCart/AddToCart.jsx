import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../AddToCart/AddToCart.module.scss";
import { Divider } from "@mui/material";
import Select from "react-select";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiUpArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
import useWindowDimensions from "../../../Home/WindowDimensions";
import axios from "axios";
import Page from "../../../../Layout/Page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BiErrorAlt } from "react-icons/bi";
import { MainButton } from "../../../../UI/Button/Button";
import { Statelabel } from "../../../../assets/StateName";
import CartContext from "../../../../ContextAPI/Context";
import EmptyCart from "../../../../assets/Empty cart.png";
import { useEffect } from "react";

const AddToCart = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const { width } = useWindowDimensions();
  const cart = useContext(CartContext);

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

  let [chestoColor, setChestoColor] = useState([]);

  useEffect(() => {
    chestoColor = cart?.cart?.map((item) => item.selectedOption.slug);

    setChestoColor([...chestoColor]);
  }, [cart]);

  let discount = 0;
  let actualAmount = totalQuantity * 14999;
  discount = actualAmount - subTotal;

  let gst = 0;
  
  let Charges = 0;
  if (cart.cart.length > 0) {
    Charges = 200;
    gst = subTotal * 12 / 100
  }
  let payableAmount = subTotal + Charges + gst;

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/chestoBuy/buyNow");
  };

  const colorStyles = {
    control: (base, state) => ({
      ...base,
      background: "#2F3538",
    }),

    singleValue: (provided, { data }) => ({
      ...provided,
      color: "#fff",
      // specify a fallback color here for those values not accounted for in the styleMap
    }),

    option: (styles, state) => {
      return {
        ...styles,
        borderBottom: "1px solid gray",
        color: state.isSelected ? "black" : "blue",
        backgroundColor: state.data.color,
        colors: {
          ...styles.colors,
          text: "orangered",
          backgroundColor: "red",
        },
      };
    },
  };

  const qunatityChange = (e, index) => {
    if (e.target.value > 0 && e.target.value < 100) {
      cart.cart[index].counter = parseInt(e.target.value);
      cart.updateCart(cart.cart[index]);
    }
  };

  const removeItem = (e, index) => {
    cart.removeCart(index);
  };

  const [shippingData, setShippingData] = useState({
    fname: "",
    lname: "",
    companyname: "",
    address1: "",
    address2: "",
    pincode: "",
    city: "",
    state: {},
    phone: "",
    email: "",
  });

  const [shippingFocused, setShippingFocused] = useState({
    fname: false,
    lname: false,
    companyname: false,
    address1: false,
    pincode: false,
    city: false,
    phone: false,
    email: false,
  });

  const shippingHandleFocus = (e) => {
    const name = e.target.id;
    setShippingFocused({ ...shippingFocused, [name]: true });
  };

  const shippingHandleInput = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setShippingData({ ...shippingData, [name]: value });
  };

  const [billingData, setBillingData] = useState({
    fname: "",
    lname: "",
    companyname: "",
    address1: "",
    address2: "",
    pincode: "",
    city: "",
    state: {},
    phone: "",
    email: "",
  });

  const [billingFocused, setBillingFocused] = useState({
    fname: false,
    lname: false,
    companyname: false,
    address1: false,
    pincode: false,
    city: false,
    phone: false,
    email: false,
  });

  const billingHandleFocus = (e) => {
    const name = e.target.id;
    setBillingFocused({ ...billingFocused, [name]: true });
  };

  const billingHandleInput = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setBillingData({ ...billingData, [name]: value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let mainData = [{ shippingData, billingData }];
    console.log(mainData);
    const TotalAmount = parseInt(payableAmount);


    function loadScript(src) {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    }

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // axios
    //   .post("https://projects.xcitech.in:5008/web/order/create", {
    //     payableAmount: payableAmount,
    //     quantity: totalQuantity,
    //     chestoColor: chestoColor,
    //     data: mainData,
    //   })
    //   .then((res) => console.log(res))
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const options = {
      key: "rzp_test_pNFO8JDVnrbpRj",
      currency: "INR",
      amount: TotalAmount * 100,
      // order_id: generateString(7),
      name: "Buying Chesto",
      description: "Please complete the procedure to make Payment",
      handler: function (response) {
        console.log(response);
        navigate("/invoice");
        toast("Your order has been done successfully");
        axios
          .post("http://localhost:5959/web/order/create", {
            payableAmount: payableAmount,
            quantity: totalQuantity,
            chestoColor: chestoColor,
            data: mainData,
            paymentId: response.razorpay_payment_id
          })
          .then((res) => console.log(res))
          .catch((error) => {
            console.log(error);
          });
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setBillingData({ ...shippingData });
    } else {
      setBillingData({
        fname: "",
        lname: "",
        companyname: "",
        address1: "",
        address2: "",
        pincode: "",
        city: "",
        state: {},
        phone: "",
        email: "",
      });
    }
    // setBillingData({ ...shippingData });
  };

  const QuantityIncrement = (index) => {
    if (cart.cart[index].counter < 100) {
      cart.cart[index].counter++;
      cart.updateCart(cart.cart[index]);
    }
  };

  const QuantityDecrement = (index) => {
    if (cart.cart[index].counter > 1) {
      cart.cart[index].counter--;
      cart.updateCart(cart.cart[index]);
    }
  };

  return (
    <Page>
      <div className={classes.AddToCartContainer}>
        <ToastContainer position="top-right" autoClose={3000} />
        <div className={classes.mainContainer}>
          <div className={classes.cartFirstRow}>
            <div className={classes.MyCartContainer}>
              <div className={classes.cartHeaderContainer}>
                <h4 style={{ margin: "15px", textAlign: "left" }}>My Cart</h4>
              </div>
              <Divider />
              {width > 550 ? (
                <div className={classes.shoppingTableContainer}>
                  {cart.cart.length > 0 ? (
                    <table className={classes.shoppingTabel}>
                      <thead style={{ color: "#6EC1E4" }}>
                        <tr>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Discounts</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.cart.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <img
                                src={item.selectedOption.image}
                                alt=""
                                width="70px"
                                height="50px"
                              />
                            </td>
                            <td>{item.selectedOption.slug}</td>
                            <td>
                              &#x20b9; {item.selectedOption.discountPrice}
                            </td>
                            <td className={classes.qunatity}>
                              <input
                                type="number"
                                value={item.counter}
                                onChange={(e) => qunatityChange(e, index)}
                              />
                            </td>
                            <td>
                              &#x20b9;
                              {item.selectedOption.discountPrice * item.counter}
                            </td>
                            <td>
                              <AiTwotoneDelete
                                style={{
                                  width: 25,
                                  height: 25,
                                  color: "red",
                                  cursor: "pointer",
                                }}
                                onClick={(e) => removeItem(e, index)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div>
                      <img
                        src={EmptyCart}
                        alt="empty"
                        width="200px"
                        height="200px"
                      />
                      <h4 style={{ color: "#6EC1E4" }}>
                        Your Cart Is Empty Right Now Feel Free to continue
                        Shopping.
                      </h4>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {cart.cart.length > 0 ? (
                    <div className={classes.responsiveTable}>
                      {cart.cart.map((item, index) => (
                        <div className={classes.mainContainer} key={index}>
                          <div className={classes.imgContainer}>
                            <div>
                              <img
                                src={item.selectedOption.image}
                                alt="chesto"
                                width="125px"
                                height="80px"
                              />
                            </div>
                            {/* <input
                            type="number"
                            value={item.counter}
                            onChange={(e) => qunatityChange(e, index)}
                          /> */}
                            <span>
                              <button
                                onClick={() => QuantityIncrement(index, +1)}
                              >
                                <BiUpArrow />
                              </button>
                              <input
                                type="number"
                                value={item.counter}
                                onChange={(e) => qunatityChange(e, index)}
                              />
                              <button
                                onClick={() => QuantityDecrement(index, -1)}
                              >
                                <BiDownArrow />
                              </button>
                            </span>
                          </div>
                          <div className={classes.contentContainer}>
                            <h4 style={{ paddingLeft: "7px" }}>
                              {item.selectedOption.slug}
                            </h4>
                            <h4 className={classes.label}>
                              &#x20b9; {item.selectedOption.discountPrice}
                            </h4>
                            <div className={classes.label}>
                              Total: &#x20b9;{" "}
                              {item.selectedOption.discountPrice * item.counter}
                            </div>
                            <AiTwotoneDelete
                              style={{
                                width: 25,
                                height: 25,
                                color: "red",
                                cursor: "pointer",
                                marginTop: 5,
                              }}
                              onClick={(e) => removeItem(e, index)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <img
                        src={EmptyCart}
                        alt="empty"
                        width="200px"
                        height="200px"
                      />
                      <h4 style={{ color: "#6EC1E4" }}>
                        Your Cart Is Empty Right Now Feel Free to continue
                        Shopping.
                      </h4>
                    </div>
                  )}
                </div>
              )}
              <Divider />
              <div className={classes.checkOutContainer}>
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

            <div className={classes.paymentContainer}>
              <div className={classes.paymentHeaderContainer}>
                <h4 style={{ margin: 0, padding: "15px", textAlign: "left" }}>
                  Payment Details
                </h4>
              </div>
              <Divider />
              <div className={classes.paymentDetailTable}>
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

          <form onSubmit={handleSubmitForm}>
            <div className={classes.cartSecondrow}>
              <div className={classes.ShippingContainer}>
                <div className={classes.shippingHeader}>
                  <h4 style={{ margin: 0, padding: "15px", textAlign: "left" }}>
                    Shipping Details
                  </h4>
                </div>
                <Divider />
                <div className={classes.shippingContent}>
                  {/* <form
                  className={classes.billingContent}
                  onSubmit={shippingHandleSubmit}
                > */}
                  <span className={classes.nameContainer}>
                    <span>
                      <div className={classes.errorLabelDiv}>
                        <label>First Name :-</label>
                        <p
                          id="error"
                          style={{
                            margin: 0,
                            color: "red",
                            fontSize: "initial",
                          }}
                        >
                          <BiErrorAlt />
                        </p>
                      </div>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="fname"
                        autoComplete="off"
                        id="fname"
                        value={shippingData.fname}
                        onChange={shippingHandleInput}
                        pattern="^[A-Za-z0-9]{3,16}$"
                        onBlur={shippingHandleFocus}
                        focused={shippingFocused.fname.toString()}
                        required
                      />
                    </span>
                    <span>
                      <div className={classes.errorLabelDiv}>
                        <label>Last Name :-</label>
                        <p
                          id="error"
                          style={{
                            margin: 0,
                            color: "red",
                            fontSize: "initial",
                          }}
                        >
                          <BiErrorAlt />
                        </p>
                      </div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lname"
                        autoComplete="off"
                        id="lname"
                        value={shippingData.lname}
                        onChange={shippingHandleInput}
                        pattern="^[A-Za-z0-9]{3,16}$"
                        onBlur={shippingHandleFocus}
                        focused={shippingFocused.lname.toString()}
                        required
                      />
                    </span>
                  </span>
                  <span>
                    <div className={classes.errorLabelDiv}>
                      <label>Company Name :-</label>
                      <p
                        id="error"
                        style={{ margin: 0, color: "red", fontSize: "initial" }}
                      >
                        <BiErrorAlt />
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      name="companyname"
                      autoComplete="off"
                      id="companyname"
                      value={shippingData.companyname}
                      onChange={shippingHandleInput}
                      pattern="^[A-Za-z0-9}_ ]{3,46}$"
                      onBlur={shippingHandleFocus}
                      focused={shippingFocused.companyname.toString()}
                      required
                    />
                  </span>
                  <span>
                    <div className={classes.errorLabelDiv}>
                      <label>Street Address :-</label>
                      <p
                        id="error"
                        style={{ margin: 0, color: "red", fontSize: "initial" }}
                      >
                        <BiErrorAlt />
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="House number and street name"
                      name="address1"
                      autoComplete="off"
                      id="address1"
                      value={shippingData.address1}
                      onChange={shippingHandleInput}
                      pattern="^[#.0-9a-zA-Z\s,-]+$"
                      onBlur={shippingHandleFocus}
                      focused={shippingFocused.address1.toString()}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suits, unit, etc.(Optional)"
                      name="address2"
                      autoComplete="off"
                      id="address2"
                      value={shippingData.address2}
                      onChange={shippingHandleInput}
                    />
                  </span>
                  <span className={classes.addressDetail}>
                    <span>
                      <div className={classes.errorLabelDiv}>
                        <label>Pin Code :-</label>
                        <p
                          id="error"
                          style={{
                            margin: 0,
                            color: "red",
                            fontSize: "initial",
                          }}
                        >
                          <BiErrorAlt />
                        </p>
                      </div>
                      <input
                        type="text"
                        placeholder="Pin Code"
                        name="pincode"
                        autoComplete="off"
                        id="pincode"
                        value={shippingData.pincode}
                        maxLength="6"
                        onChange={shippingHandleInput}
                        pattern="^[1-9][0-9]{5}$"
                        onBlur={shippingHandleFocus}
                        focused={shippingFocused.pincode.toString()}
                        required
                      />
                    </span>
                    <span>
                      <div className={classes.errorLabelDiv}>
                        <label>City/Town :-</label>
                        <p
                          id="error"
                          style={{
                            margin: 0,
                            color: "red",
                            fontSize: "initial",
                          }}
                        >
                          <BiErrorAlt />
                        </p>
                      </div>
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        autoComplete="off"
                        id="city"
                        value={shippingData.city}
                        onChange={shippingHandleInput}
                        pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"
                        onBlur={shippingHandleFocus}
                        focused={shippingFocused.city.toString()}
                        required
                      />
                    </span>
                  </span>
                  <span className={classes.stateContainer}>
                    <Select
                      options={Statelabel}
                      styles={colorStyles}
                      placeholder="Select States..."
                      name="state"
                      // value={shippingData.state}
                      onChange={(e) =>
                        setShippingData({ ...shippingData, state: e })
                      }
                    />
                  </span>
                  <span className={classes.ContactContainer}>
                    <span>
                      <div className={classes.errorLabelDiv}>
                        <label>Phone Number :-</label>
                        <p
                          id="error"
                          style={{
                            margin: 0,
                            color: "red",
                            fontSize: "initial",
                          }}
                        >
                          <BiErrorAlt />
                        </p>
                      </div>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        name="phone"
                        autoComplete="off"
                        id="phone"
                        value={shippingData.phone}
                        onChange={shippingHandleInput}
                        pattern="^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$"
                        onBlur={shippingHandleFocus}
                        focused={shippingFocused.phone.toString()}
                        required
                      />
                    </span>
                    <span>
                      <div className={classes.errorLabelDiv}>
                        <label>Email :-</label>
                        <p
                          id="error"
                          style={{
                            margin: 0,
                            color: "red",
                            fontSize: "initial",
                          }}
                        >
                          <BiErrorAlt />
                        </p>
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        autoComplete="off"
                        id="email"
                        value={shippingData.email}
                        onBlur={shippingHandleFocus}
                        focused={shippingFocused.email.toString()}
                        onChange={shippingHandleInput}
                        required
                      />
                    </span>
                  </span>
                  {/* <MainButton
                    style={{
                      margin: 5,
                      fontSize: 15,
                      borderRadius: 10,
                      padding: "0px  10px",
                    }}
                    type={"submit"}
                  >
                    Submit
                  </MainButton> */}
                  {/* </form> */}
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
                  <div className={classes.checkbox}>
                    <input
                      type="checkbox"
                      id="shippingDetail"
                      onClick={handleCheckBox}
                    />
                    <label htmlFor="shippingDetail">
                      Same As Shipping Details
                    </label>
                  </div>
                  <span className={classes.nameContainer}>
                    <span>
                      <label>First Name :-</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="fname"
                        autoComplete="off"
                        value={billingData.fname}
                        id="fname"
                        required
                        onChange={billingHandleInput}
                        pattern="^[A-Za-z0-9]{3,16}$"
                        // onBlur={billingHandleFocus}
                        // focused={billingFocused.fname.toString()}
                      />
                    </span>
                    <span>
                      <label>Last Name :-</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lname"
                        autoComplete="off"
                        id="lname"
                        value={billingData.lname}
                        required
                        onChange={billingHandleInput}
                        pattern="^[A-Za-z0-9]{3,16}$"
                        onBlur={billingHandleFocus}
                        focused={billingFocused.lname.toString()}
                      />
                    </span>
                  </span>
                  <span>
                    <label>Company Name :-</label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      name="companyname"
                      autoComplete="off"
                      id="companyname"
                      value={billingData.companyname}
                      required
                      onChange={billingHandleInput}
                      pattern="^[A-Za-z0-9}_ ]{3,46}$"
                      onBlur={billingHandleFocus}
                      focused={billingFocused.companyname.toString()}
                    />
                  </span>
                  <span>
                    <label>Street Address :-</label>
                    <input
                      type="text"
                      placeholder="House number and street name"
                      name="address1"
                      autoComplete="off"
                      id="address1"
                      required
                      value={billingData.address1}
                      onChange={billingHandleInput}
                      pattern="^[#.0-9a-zA-Z\s,-]+$"
                      onBlur={billingHandleFocus}
                      focused={billingFocused.address1.toString()}
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suits, unit, etc.(Optional)"
                      autoComplete="off"
                      name="address2"
                      id="address2"
                      value={billingData.address2}
                      onChange={billingHandleInput}
                    />
                  </span>
                  <span className={classes.addressDetail}>
                    <span>
                      <label>Pin Code :-</label>
                      <input
                        type="text"
                        placeholder="Pin Code"
                        name="pincode"
                        autoComplete="off"
                        id="pincode"
                        required
                        value={billingData.pincode}
                        onChange={billingHandleInput}
                        pattern="^[1-9][0-9]{5}$"
                        onBlur={billingHandleFocus}
                        focused={billingFocused.pincode.toString()}
                      />
                    </span>
                    <span>
                      <label>City/Town :-</label>
                      <input
                        type="text"
                        placeholder="City/Town"
                        name="city"
                        autoComplete="off"
                        id="city"
                        required
                        value={billingData.city}
                        onChange={billingHandleInput}
                        pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"
                        onBlur={billingHandleFocus}
                        focused={billingFocused.city.toString()}
                      />
                    </span>
                  </span>
                  <span className={classes.stateContainer}>
                    <Select
                      options={Statelabel}
                      styles={colorStyles}
                      placeholder="Select States..."
                      value={billingData.state}
                      onChange={(e) =>
                        setBillingData({ ...billingData, state: e })
                      }
                    />
                  </span>
                  <span className={classes.ContactContainer}>
                    <span>
                      <label>Phone Number :-</label>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        name="phone"
                        autoComplete="off"
                        id="phone"
                        required
                        value={billingData.phone}
                        onChange={billingHandleInput}
                        pattern="^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$"
                        onBlur={billingHandleFocus}
                        focused={billingFocused.phone.toString()}
                      />
                    </span>
                    <span>
                      <label>E-Mail :-</label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        autoComplete="off"
                        id="email"
                        required
                        value={billingData.email}
                        onChange={billingHandleInput}
                        onBlur={billingHandleFocus}
                        focused={billingFocused.email.toString()}
                      />
                    </span>
                  </span>
                  {/* <MainButton
                  style={{
                    margin: 5,
                    fontSize: 15,
                    borderRadius: 10,
                    padding: "0px  10px",
                  }}
                  type={"submit"}
                >
                  Make Payment
                </MainButton> */}
                </div>
              </div>
            </div>
            <div className={classes.submitContainer}>
              <MainButton
                style={{
                  marginTop: 20,
                  // fontSize: 15,
                  // borderRadius: 10,
                  // padding: "0px  10px",
                }}
                type={"submit"}
              >
                <b>Make Payment</b>
              </MainButton>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default AddToCart;
