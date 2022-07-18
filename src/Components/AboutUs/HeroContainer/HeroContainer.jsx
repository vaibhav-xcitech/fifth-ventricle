import React, { useEffect } from "react";
import classes from "../HeroContainer/HeroContainer.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

import heroImage from "../../../assets/About Us_1.png";

const HeroContainer = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <div className={classes.heroContainer}>
        <div data-aos="fade-up" className={classes.heroTextContainer}>
          <img src={heroImage} alt="HeroImage" />
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
