import React from "react";
import classes from "../HeroContainer/HeroContainer.module.scss";

import heroImage from "../../../assets/About Us_1.png"

const HeroContainer = () => {
  return (
    <>
      <div className={classes.heroContainer}>
        <div className={classes.heroTextContainer}>
          <img src={heroImage} alt="HeroImage" />
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
