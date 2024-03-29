import React from "react";
import classes from "../Footer/Footer.module.scss";
import { useNavigate } from "react-router-dom";
import {
  HiOfficeBuilding,
  HiPhone,
  HiLocationMarker,
  HiMailOpen,
} from "react-icons/hi";
import { GrFacebookOption } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.NavbarInnerContainer}>
      <div className={classes.mainContainer}>
        <div className={classes.LeftContainer}>
          <img
            src="https://www.fifthventricle.in/wp-content/uploads/elementor/thumbs/cropped-fifth-ventricle-full-paqadr3fkgfpd5gl63o14tejvzngica2atitjsjj7k.png"
            alt="logo"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            exercitationem delectus accusantium itaque vitae rem cumque
            consequatur laboriosam officia animi! Quaerat aliquid tempora eaque,
            facere dolore ad sed tempore nisi molestiae adipisci maxime itaque
            laborum?
          </p>
        </div>
        <div className={classes.RightContainer}>
          <div className={classes.RightDivOne}>
            <h4
              style={{
                fontSize: "18px",
                textAlign: "left",
                marginLeft: "26px",
              }}
            >
              CONTACT
            </h4>
            <div className={classes.ContactDetails}>
              <div>
                <HiOfficeBuilding
                  style={{ width: 15, height: 15, margin: 7 }}
                />
                <p style={{ marginTop: 4, marginBottom: 0 }}>Fifth Ventrical</p>
              </div>
              <div>
                <span>
                  <HiLocationMarker
                    style={{ width: 15, height: 15, margin: 7 }}
                  />
                </span>
                <span>
                  <p>
                    202, Ananta Trendz, Gotri Laxmipura Road, Vadodara, 390021
                  </p>
                </span>
              </div>
              <div>
                <HiPhone style={{ width: 15, height: 15, margin: 7 }} />
                <p style={{ marginTop: 4, marginBottom: 0 }}>
                  +91 6355 392 577
                </p>
              </div>
              <div>
                <HiMailOpen style={{ width: 15, height: 15, margin: 7 }} />
                <p style={{ marginTop: 4, marginBottom: 0 }}>
                  hirak@fifthventricle.in
                </p>
              </div>
            </div>
          </div>
          <div className={classes.RightDivTwo}>
            <h4 style={{ fontSize: "18px", marginLeft: "8px" }}>
              FIFTH VENTRICAL
            </h4>
            <div className={classes.companyDetails}>
              <div onClick={() => navigate("/aboutus")}>About Us</div>
              <div onClick={() => navigate("/termcondition")}>
                Terms Of Services
              </div>
              <div onClick={() => navigate("/privacypolicy")}>
                Privacy Police
              </div>
              <div onClick={() => navigate("/contact")}>Contact Us</div>
            </div>
          </div>

          <div className={classes.RightDivThree}>
            <h4 style={{ fontSize: "18px" }}>SOCIAL</h4>
            <div className={classes.socialIcon}>
              <button
                className={classes.btn}
                onClick={() =>
                  window.open("https://www.facebook.com/fifthventricle.in/")
                }
              >
                <span>
                  <GrFacebookOption />
                </span>
              </button>
              <button
                className={classes.btn}
                onClick={() =>
                  window.open("https://www.linkedin.com/company/5th-ventricle/")
                }
              >
                <span>
                  <GrLinkedinOption />
                </span>
              </button>
              <button
                className={classes.btn}
                onClick={() =>
                  window.open("https://www.instagram.com/5th_ventricle/?hl=en")
                }
              >
                <span>
                  <GrInstagram />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.copyRightContainer}>
        <b>Copyright 2022 &#169; Fifth Ventrical All Rights Reserved</b>
      </div>
    </div>
  );
};

export default Footer;
