import React from "react";
import classes from "../JourneyContainer/JourneyContainer.module.scss"
import useWindowDimensions from "../WindowDimensions";
import { MainButton } from "../../../UI/Button/Button";

import OfficeImage2 from "../../../assets/Chesto_Project Research.png";

const JourneyContainer = () => {

    const { width } = useWindowDimensions();
    
  return (
    <>
      <div className={classes.homeJourneyContainer}>
        <div className={classes.journeyMainContainer}>
          {width <= 700 ? (
            ""
          ) : (
            <div className={classes.homeRightContainer}>
              <div className={classes.imgWrapper}>
                <img
                  src={OfficeImage2}
                  alt="homeImage1"
                  className={classes.image}
                />
              </div>
            </div>
          )}

          <div className={classes.journeyContentContainer}>
            <div className={classes.journeyHeaderContainer}>
              <h4>THE JOURNEY</h4>
              <h1 style={{ color: "#5fdad5", marginTop: 0 }}>
                PROJECT RESEARCH
              </h1>
              <h4>
                MAKING SURE THAT NOTHING GOES PAST YOUR EAR. THE FUTURE OF
              </h4>
              <h2>STETHOSCOPE.</h2>
            </div>

            {width >= 700 ? (
              ""
            ) : (
              <div className={classes.homeRightContainer}>
                <div className={classes.imgWrapper}>
                  <img
                    src={OfficeImage2}
                    alt="homeImage3"
                    className={classes.image}
                  />
                </div>
              </div>
            )}

            <div className={classes.journeyCardsContainer}>
              <div className={classes.journeyUpperContainer}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                reprehenderit necessitatibus rerum labore animi quas iure a
                natus voluptatibus voluptate rem aliquid, nesciunt qui, dolores
                consectetur, soluta odio ad doloremque et quia.
              </div>
              <div className={classes.journeyLowerContainer}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                incidunt magni praesentium ullam ipsum ratione maiores quos, eos
                error quod soluta cupiditate autem suscipit et veniam possimus
                pariatur voluptatum atque ut rerum molestiae vel.asperiores!
              </div>
            </div>
            <div className={classes.journeyBottomContainer}>
              <MainButton type="button">
                <b>Know More</b>
              </MainButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyContainer;
