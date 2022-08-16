import React from "react";
import classes from "../HeroContainer/HeroContainer.module.scss";
import { MainButton } from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";

import Typewriter from "typewriter-effect";
import heroImage from "../../../assets/Chesto Animation.json";
import StartUpIndia from "../../../assets/Startupindia.png";
import MakeInIndia from "../../../assets/Make In India.png";
import IsoAssured from "../../../assets/ISO13485.png";

const HeroContainer = () => {
  // const vidref = useRef();
  const navigate = useNavigate();

  // useEffect(() => {
  //   vidref.current.play(console.log("hello"));
  // }, []);

  const defaultOptions = {
    loop: true,
      autoplay: true,
      animationData: heroImage,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
  }

  return (
    <>
      <div className={classes.homeHeroContainer}>
        <div className={classes.heroTextImgContainer}>
          <Lottie options={defaultOptions} width="100%" />
          <div className={classes.homeTypewriterContainer}>
            INDIA'S FIRST&nbsp;
            <Typewriter
              className={classes.typewriter}
              onInit={(typewriter) => {
                typewriter
                  .typeString("TRULY TUBELESS")
                  .pauseFor(2000)
                  .deleteAll(50)
                  .start();
              }}
              options={{ loop: true }}
            />
          </div>
          <h1 style={{ color: "#fff" ,margin: 15, fontWeight: 700, fontSize: "40px" }}>
          DIGITAL SMART STEHOSCOPE
          </h1>
          {/* <MainButton
            type="button"
            onClick={() => navigate("/inqurie")}
            style={{ marginBottom: "10px" }}
          >
            <b>Enquire now</b>
          </MainButton> */}
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
