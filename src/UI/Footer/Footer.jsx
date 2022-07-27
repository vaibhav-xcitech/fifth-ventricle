import React from "react";
import classes from "../Footer/Footer.module.scss";
import { useNavigate } from "react-router-dom";
import {
  HiOfficeBuilding,
  HiPhone,
  HiLocationMarker,
  HiMailOpen,
} from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

  const navigate = useNavigate();
  
  return (
    <div className={classes.NavbarInnerContainer}>
      <div className={classes.LeftContainer}>
        <img
          src="https://www.fifthventricle.in/wp-content/uploads/elementor/thumbs/cropped-fifth-ventricle-full-paqadr3fkgfpd5gl63o14tejvzngica2atitjsjj7k.png"
          alt="logo"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, porro.
          Perferendis nisi doloremque, laboriosam aperiam esse dolorum explicabo
          laudantium incidunt dignissimos magni at nemo corporis? Rerum
          veritatis atque facere neque voluptatum, itaque quasi delectus?
          Numquam in dolor nulla, repudiandae laudantium ipsam quo voluptatum
          corporis aut et tempora, quam est nisi.
        </p>
      </div>
      <div className={classes.RightContainer}>
        <div className={classes.RightDivOne}>
          <h4>CONTACT</h4>
          <div className={classes.ContactDetails}>
            <div>
              <HiOfficeBuilding style={{ width: 15, height: 15, margin: 7 }} />
              Fifth Ventrical
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
              +91 6355 392 577
            </div>
            <div>
              <HiMailOpen style={{ width: 15, height: 15, margin: 7 }} />
              hirak@fifthventricle.in
            </div>
          </div>
        </div>
        <div className={classes.RightDivTwo}>
          <h4>FIFTH VENTRICAL</h4>
          <div className={classes.companyDetails}>
            <div onClick={() => navigate("/aboutus")}>About Us</div>
            <div>Terms Of Services</div>
            <div>Privacy Police</div>
            <div onClick={() => navigate("/contact")}>Contact Us</div>
          </div>
        </div>

        <div className={classes.RightDivThree}>
          <h4>SOCIAL</h4>
          <div className={classes.socialIcon}>
            <button className={classes.btn}>
              <span style={{ color: "#fff" }}>
                <FaFacebookF />
              </span>
            </button>
            <button className={classes.btn}>
              <span style={{ color: "#fff" }}>
                <FaLinkedinIn />
              </span>
            </button>
            <button className={classes.btn}>
              <span style={{ color: "#fff" }}>
                <FaInstagram />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
