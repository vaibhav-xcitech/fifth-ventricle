import React, { useEffect, useState } from "react";
import classes from "./Contact.module.scss";
import { MainButton } from "../../UI/Button/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import copy from "copy-to-clipboard";
import Page from "../../Layout/Page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import fonderimg from "../../assets/svgviewer-output (22).svg";
import quats from "../../assets/svgviewer-output (27).svg";
import whatsappImg from "../../assets/svgviewer-output (26).svg";
import callImg from "../../assets/svgviewer-output (25).svg";
import emailImg from "../../assets/svgviewer-output (24).svg";
import copyImg from "../../assets/svgviewer-output (23).svg";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const [copyText] = useState({
    whatsUpNo: "+91 0011225544",
    callingNo: "+91 0011225544",
    email: "abcde@abchedf.com",
  });

  const handleCopyWNo = () => {
    copy(copyText.whatsUpNo);
    toast("Copied");
  };

  const handleCopyCNo = () => {
    copy(copyText.callingNo);
    toast("Copied");
  };

  const handleCopyMail = () => {
    copy(copyText.email);
    toast("Copied");
  };

  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [msgFocus, setmsgFocus] = useState({
    name: false,
    email: false,
    message: false,
  });

  const msgHandleFocus = (e) => {
    const name = e.target.id;

    setmsgFocus({ ...msgFocus, [name]: true });
  };

  const msgHandleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setMessage({ ...message, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage({
      name: "",
      email: "",
      massage: "",
    });
  };

  return (
    <Page>
      <div className={classes.contactContainer}>
        <ToastContainer position="top-right" autoClose={1500} />
        <div data-aos="fade-down" className={classes.contactUsHeader}>
          <h1>Contact Us</h1>
          <h4>We always love to hear from you.</h4>
        </div>
        <div className={classes.contactBodyContainer}>
          <div data-aos="fade-up" className={classes.contactUsContainer}>
            <div>
              <img src={fonderimg} alt="fonder" width="60px" height="60px" />
            </div>
            <div className={classes.contactUsHeader}>
              <img src={quats} alt="fonder" width="30px" height="30px" />
              <p>
                We belive that understanding the user is the first step towards
                true success.
              </p>
            </div>
            <div className={classes.contactUsContant}>
              <div className={classes.contactUsContantRow}>
                <div className={classes.alignLeftDiv}>
                  <img
                    src={whatsappImg}
                    alt="whatsappImg"
                    width="30px"
                    height="30px"
                  />
                  <p style={{ marginBottom: 0 }}>{copyText.whatsUpNo}</p>
                </div>
                <div onClick={handleCopyWNo} style={{ cursor: "pointer" }}>
                  <img src={copyImg} alt="copyImg" width="30px" height="30px" />
                </div>
              </div>

              <div className={classes.contactUsContantRow}>
                <div className={classes.alignLeftDiv}>
                  <img
                    src={callImg}
                    alt="whatsappImg"
                    width="30px"
                    height="30px"
                  />
                  <p style={{ marginBottom: 0 }}>{copyText.callingNo}</p>
                </div>
                <div onClick={handleCopyCNo} style={{ cursor: "pointer" }}>
                  <img src={copyImg} alt="copyImg" width="30px" height="30px" />
                </div>
              </div>

              <div className={classes.contactUsContantRow}>
                <div className={classes.alignLeftDiv}>
                  <img
                    src={emailImg}
                    alt="whatsappImg"
                    width="30px"
                    height="30px"
                  />
                  <p style={{ marginBottom: 0 }}>{copyText.email}</p>
                </div>
                <div onClick={handleCopyMail} style={{ cursor: "pointer" }}>
                  <img src={copyImg} alt="copyImg" width="30px" height="30px" />
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className={classes.msgtUsContainer}>
            <div className={classes.msgtUsHeader}>
              <h1>Send Us a Message!</h1>
            </div>
            <form className={classes.msgUsContent} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                id="name"
                pattern="^[A-Za-z0-9}_ ]{3,26}$"
                name="name"
                onChange={msgHandleChange}
                onBlur={msgHandleFocus}
                focused={msgFocus.name.toString()}
                required
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                onChange={msgHandleChange}
                autoComplete="off"
                onBlur={msgHandleFocus}
                focused={msgFocus.email.toString()}
                required
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="4"
                pattern="^[A-Za-z0-9}_ ]{3,260}$"
                placeholder="Message"
                autoComplete="off"
                onChange={msgHandleChange}
                onBlur={msgHandleFocus}
                focused={msgFocus.message.toString()}
                required
              ></textarea>
              <MainButton
                style={{ marginTop: 0, padding: "3px 30px" }}
                type={"submit"}
              >
                Send
              </MainButton>
            </form>
          </div>
        </div>
      </div>

      <div className={classes.locateUsContainer}>
        <div className={classes.locateUsHeader}>
          <h1>Locate Us</h1>
          {/* <h4>Coz Why Not !.</h4> */}
        </div>
        <div className={classes.locateUsContant}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.6707148385976!2d73.13146521487394!3d22.328289847520878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc94f22570a01%3A0xf36639f2fc6d950b!2sXcitech%20Technologies!5e0!3m2!1sen!2sin!4v1655794426027!5m2!1sen!2sin"
            allowFullScreen={true}
            loading="lazy"
            title="locateUs"
          ></iframe>
        </div>
      </div>
    </Page>
  );
};

export default Contact;
