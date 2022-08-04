import React, { useEffect, useRef } from "react";
import classes from "../HeroContainer/HeroContainer.module.scss";
import { MainButton } from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

import Typewriter from "typewriter-effect";
import heroImage from "../../../assets/Comp 1.mp4";
import StartUpIndia from "../../../assets/Startupindia.png";
import MakeInIndia from "../../../assets/Make In India.png";
import IsoAssured from "../../../assets/ISO13485.png";

const HeroContainer = () => {
  const vidref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    vidref.current.play(console.log("hello"));
  }, []);

  return (
    <>
      <div className={classes.homeHeroContainer}>
        <div className={classes.heroTextImgContainer}>
          <video width={"100%"} ref={vidref} muted autoPlay loop>
            <source src={heroImage} type="video/mp4" />
          </video>
          <div className={classes.homeTypewriterContainer}>
            India's first Truly&nbsp;
            <Typewriter
              className={classes.typewriter}
              onInit={(typewriter) => {
                typewriter
                  .typeString("TUBELESS")
                  .pauseFor(2000)
                  .deleteAll(50)
                  .start();
              }}
              options={{ loop: true }}
            />
          </div>
          <h4 style={{ margin: 15 }}>
            Smart Digital Stethoscope Making Company
          </h4>
          <MainButton
            type="button"
            onClick={() => navigate("/inqurie")}
            style={{ marginBottom: "10px" }}
          >
            <b>Enquire now</b>
          </MainButton>
        </div>
      </div>

      <div className={classes.qualityAssuredContainer}>
        <div className={classes.imagesContainer}>
          <img src={StartUpIndia} alt="homeImage1" width="200" height="100" />
        </div>
        <div className={classes.imagesContainer}>
          <img src={MakeInIndia} alt="homeImage2" width="200" height="135" />
        </div>
        <div className={classes.imagesContainer}>
          <img src={IsoAssured} alt="homeImage3" width="100" height="100" />
          <b style={{ color: "black", fontWeight: "700", fontSize: "20px" }}>
            QUALITY ASSURED
          </b>
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
