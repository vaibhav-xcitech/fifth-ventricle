import React, { useState } from "react";
import classes from "../Enqurie/Enqurie.module.scss";
import { Divider } from "@mui/material";
import { BiErrorAlt } from "react-icons/bi";
import { MainButton } from "../../../../UI/Button/Button";
import Page from "../../../../Layout/Page";

const Enqurie = () => {
  const [enqurie, setEnqurie] = useState({
    fname: "",
    lname: "",
    phone: "",
    city: "",
    email: "",
    timing: "",
  });

  const [valid, setValid] = useState({
    fname: false,
    lname: false,
    phone: false,
    city: false,
    email: false,
    timing: false,
  });

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setEnqurie({ ...enqurie, [name]: value });
  };

  const handleFocus = (e) => {
    const name = e.target.id;

    setValid({ ...valid, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(enqurie);
    setEnqurie({
      fname: "",
      lname: "",
      phone: "",
      city: "",
      email: "",
      timing: "",
    });
  };

  return (
    <Page>
      <div className={classes.EnqurieContainer}>
        <div className={classes.enqurieMain}>
          <div className={classes.liveDemoHeader}>
            <span style={{ margin: 0, padding: "5px", fontSize: "18.72px" }}>
              Not Sure Yet? Take A
            </span>
            <span
              style={{
                margin: 0,
                padding: "5px",
                fontSize: "18.72px",
                color: "#FFE500",
                fontWeight: 500,
              }}
            >
              LIVE DEMO
            </span>
          </div>
          <Divider style={{ color: "red" }} />
          <div className={classes.liveDemoContainer}>
            <form className={classes.liveDemoForm} onSubmit={handleSubmit}>
              <div className={classes.nameContainer}>
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
                    placeholder="Enter Your First Name"
                    name="fname"
                    id="fname"
                    onChange={handleChange}
                    pattern="^[A-Za-z0-9]{3,16}$"
                    onBlur={handleFocus}
                    focused={valid.fname.toString()}
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
                    placeholder="Enter Your Last Name"
                    name="lname"
                    id="lname"
                    onChange={handleChange}
                    pattern="^[A-Za-z0-9]{3,16}$"
                    onBlur={handleFocus}
                    focused={valid.lname.toString()}
                    required
                  />
                </span>
              </div>

              <div className={classes.phoneCityContainer}>
                <span>
                  <div className={classes.errorLabelDiv}>
                    <label>phone Number :-</label>
                    <p
                      id="error"
                      style={{ margin: 0, color: "red", fontSize: "initial" }}
                    >
                      <BiErrorAlt />
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Your phone Number"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    pattern="^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$"
                    onBlur={handleFocus}
                    focused={valid.phone.toString()}
                    required
                  />
                </span>
                <span>
                  <div className={classes.errorLabelDiv}>
                    <label>City :-</label>
                    <p
                      id="error"
                      style={{ margin: 0, color: "red", fontSize: "initial" }}
                    >
                      <BiErrorAlt />
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter City Name"
                    name="city"
                    id="city"
                    onChange={handleChange}
                    pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"
                    onBlur={handleFocus}
                    focused={valid.city.toString()}
                    required
                  />
                </span>
              </div>

              <div className={classes.emailContainer}>
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
                    type="Email"
                    placeholder="Enter Your Valid Email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    pattern=""
                    onBlur={handleFocus}
                    focused={valid.email.toString()}
                    required
                  />
                </span>
              </div>

              <div className={classes.TimingContainer}>
                <span>
                  <div className={classes.errorLabelDiv}>
                    <label>Preferred Timing :-</label>
                    <p
                      id="error"
                      style={{ margin: 0, color: "red", fontSize: "initial" }}
                    >
                      <BiErrorAlt />
                    </p>
                  </div>
                  <textarea
                    name="timing"
                    id="timing"
                    cols="30"
                    rows="5"
                    placeholder="Tell us your preferred timing for our team to call you for live demo"
                    onChange={handleChange}
                    pattern=""
                    onBlur={handleFocus}
                    focused={valid.timing.toString()}
                    required
                  />
                </span>
              </div>

              <div>
                <MainButton
                  style={{
                    margin: "12px",
                    padding: "2px 15px",
                    fontSize: "15px",
                    borderRadius: "15px",
                  }}
                  type={"submit"}
                >
                  Submit
                </MainButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Enqurie;
