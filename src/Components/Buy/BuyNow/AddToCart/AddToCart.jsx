import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "../AddToCart/AddToCart.module.scss";
import { Divider } from "@mui/material";
import Select from "react-select";
import { AiOutlineDelete } from "react-icons/ai"

import { BiErrorAlt } from "react-icons/bi";
import { MainButton } from "../../../../UI/Button/Button";
import { Statelabel } from "../../../../assets/StateName";
import CartContext from "../../../../Context/Context";

const AddToCart = () => {
  const location = useLocation();
  const cart = useContext(CartContext);

  console.log(">>>>>>>>>>>>>", cart);

  let total = 0;
  cart.cart.map((item) => {
    total = total + item.selectedOption.discountPrice;
  });

  let subTotal = 0;
  cart.cart.map((item) => {

    subTotal = subTotal + (item.selectedOption.discountPrice * item.counter);
  });


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigate = useNavigate();

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

  const shippingHandleSubmit = (e) => {
    e.preventDefault();
    console.log(shippingData);
    setShippingData({
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

    setShippingFocused({
      fname: false,
      lname: false,
      companyname: false,
      address1: false,
      pincode: false,
      city: false,
      phone: false,
      email: false,
    });
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

  const billingHandleSubmit = (e) => {
    e.preventDefault();
    console.log(billingData);
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

    setBillingFocused({
      fname: false,
      lname: false,
      companyname: false,
      address1: false,
      pincode: false,
      city: false,
      phone: false,
      email: false,
    });
  };

  const handleCheckBox = () => {
    setBillingData({ ...shippingData });
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
                    <th>image</th>
                    <th>Product Name</th>
                    <th>Discounted Price</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
                    {/* <th>Action</th> */}
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
                      <td>&#x20b9; {item.selectedOption.discountPrice}</td>
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
                        <AiOutlineDelete
                          style={{ width: 25, height: 25 }}
                          onClick={(e) => removeItem(e, index)}
                        />
                      </td>
                    </tr>
                  ))}
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
                <div className={classes.label}>Product Price</div>
                <div>&#x20b9; {subTotal}</div>
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
              <form
                className={classes.billingContent}
                onSubmit={shippingHandleSubmit}
              >
                <span className={classes.nameContainer}>
                  <span>
                    <div className={classes.errorLabelDiv}>
                      <label>First Name :-</label>
                      <p
                        id="error"
                        style={{ margin: 0, color: "red", fontSize: "initial" }}
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
                        style={{ margin: 0, color: "red", fontSize: "initial" }}
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
                    pattern="^[A-Za-z0-9}_ ]{3,26}$"
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
                        style={{ margin: 0, color: "red", fontSize: "initial" }}
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
                        style={{ margin: 0, color: "red", fontSize: "initial" }}
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
                    value={shippingData.state}
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
                        style={{ margin: 0, color: "red", fontSize: "initial" }}
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
                        style={{ margin: 0, color: "red", fontSize: "initial" }}
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
                <MainButton
                  style={{
                    margin: 5,
                    fontSize: 15,
                    borderRadius: 10,
                    padding: "0px  10px",
                  }}
                  type={"submit"}
                >
                  Submit
                </MainButton>
              </form>
            </div>
          </div>
          <div className={classes.billingContainer}>
            <div className={classes.billingHeader}>
              <h4 style={{ margin: 0, padding: "15px", textAlign: "left" }}>
                Billings Details
              </h4>
            </div>
            <Divider />
            <form
              className={classes.billingContent}
              onSubmit={billingHandleSubmit}
            >
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="shippingDetail"
                  onClick={handleCheckBox}
                />
                <label htmlFor="shippingDetail">Same As Shipping Details</label>
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
                  pattern="^[A-Za-z0-9]{3,26}$"
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
                  onChange={(e) => setBillingData({ ...billingData, state: e })}
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
              <MainButton
                style={{
                  margin: 5,
                  fontSize: 15,
                  borderRadius: 10,
                  padding: "0px  10px",
                }}
                type={"submit"}
              >
                Continue For CheckOut
              </MainButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
