import React from "react";
import CountUp from "react-countup";
import classes from "../ChestoContainer/ChestoContainer.module.scss";
import useWindowDimensions from "../WindowDimensions";
import { MainButton } from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";

import chestoImage from "../../../assets/Our Product Line.png";

import img from "../../../assets/Chesto_brochure_catalogue.pdf";

const ChestoContainer = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/chestoBuy/buyNow");
  };

  const handleDownload = () => {
    saveAs(img);
  }

  const { width } = useWindowDimensions();

  return (
    <>
      <div className={classes.homeChestoContainer}>
        <div className={classes.chestoDesc}>
          <div className={classes.descHeader}>
            <h4 style={{ marginBottom: 0 }}>THE RESULT</h4>
            <h2 style={{ color: "#5fdad5", marginTop: 0 }}>OUR PRODUCT LINE</h2>
          </div>
          {width > 800 ? (
            ""
          ) : (
            <div className={classes.chestoImg}>
              <img src={chestoImage} alt="Chesto" />
            </div>
          )}
          <div className={classes.ChestoContent}>
            {/* <h3>INTRODUCING THE REVOLUTIONARY</h3>
            <h3 style={{ marginTop: 0 }}>DIGITAL STETHOSCOPE</h3>
            <h2 style={{ color: "#5fdad5", marginTop: 0 }}>CHESTO</h2>
            <br /> */}
            <p style={{ textAlign: "center", marginTop: 10 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur voluptate eligendi necessitatibus doloremque minima
              incidunt voluptatibus id nesciunt cumque iste minus dolores
              dignissimos, quidem praesentium veniam placeat, magni, modi
              tenetur.
            </p>
          </div>
          <div className={classes.chestobottom}>
            <div className={classes.chestoCountTop}>
              <div className={classes.chestoBox}>
                <h2 style={{ color: "#fae92a", textAlign: "left" }}>
                  <CountUp end={92} suffix="%" enableScrollSpy="true" />
                </h2>
                <h4>AI and ML</h4>
                <h4>ACCURACY</h4>
              </div>
              <div className={classes.chestoBox}>
                <h2 style={{ color: "#fae92a", textAlign: "left" }}>
                  <CountUp end={14} suffix="+" enableScrollSpy="true" />
                </h2>
                <h4>MONTHS INTO</h4>
                <h4>DEVELOPMENT</h4>
              </div>
            </div>

            <div className={classes.chestoCountBottom}>
              <div className={classes.chestoBox}>
                <h2 style={{ color: "#fae92a", textAlign: "left" }}>
                  <CountUp end={200} suffix="+" enableScrollSpy="true" />
                </h2>
                <h4>SAMPLES</h4>
                <h4>COLLECTED</h4>
              </div>
              <div className={classes.chestoBox}>
                <h2 style={{ color: "#fae92a", textAlign: "left" }}>
                  <CountUp end={30} suffix="+" enableScrollSpy="true" />
                </h2>
                <h4>YEARS OF</h4>
                <h4>INDUSTRY EXPERIENCE</h4>
              </div>
            </div>
          </div>
          <div className={classes.chestoboxbutton}>
            <MainButton onClick={handleRedirect}>BUY NOW</MainButton>
            <MainButton onClick={handleDownload}>FULL CATALOGUE</MainButton>
          </div>
        </div>
        {width <= 800 ? (
          ""
        ) : (
          <div className={classes.chestoImg}>
            <img src={chestoImage} alt="Chesto" height="650px" />
          </div>
        )}
      </div>
    </>
  );
};

export default ChestoContainer;
