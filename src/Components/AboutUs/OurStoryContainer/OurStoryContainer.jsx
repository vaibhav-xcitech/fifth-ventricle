import React from "react";
import classes from "../OurStoryContainer/OurStoryContainer.module.scss"
import useWindowDimensions from "../../Home/WindowDimensions";
import { MainButton } from "../../../UI/Button/Button";

import OfficeImage from "../../../assets/Our Story.png"

const OurStoryContainer = () => {

    const { width } = useWindowDimensions();

  return (
    <>
      <div className={classes.homeThirdContainer}>
        <div className={classes.MidleContainer}>
          {width <= 700 ? (
            ""
          ) : (
            <div className={classes.homeRightContainer}>
              <div className={classes.imgWrapper}>
                <img
                  src={OfficeImage}
                  alt="homeImage1"
                  className={classes.image}
                />
              </div>
            </div>
          )}

          <div className={classes.LeftMidleContainer}>
            <div className={classes.LeftTopHeader}>
              <h4>THE BRIEF</h4>
              <h1 style={{ color: "#5fdad5" }}>OUR STORY</h1>
            </div>

            {width >= 700 ? (
              ""
            ) : (
              <div className={classes.homeRightContainer}>
                <div className={classes.imgWrapper}>
                  <img
                    src={OfficeImage}
                    alt="homeImage1"
                    className={classes.image}
                  />
                </div>
              </div>
            )}

            <div className={classes.HomeCardsContainer}>
              <div className={classes.homeUpperCards}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Itaque necessitatibus debitis voluptatum qui obcaecati facilis
                  et tempore nesciunt blanditiis, adipisci ratione. Iste aliquid
                  quam illo suscipit laudantium quia odio error iure dolor
                  architecto, eius consequatur laboriosam ullam modi possimus ex
                  tempore corporis voluptatum adipisci eligendi! Omnis provident
                  in ratione temporibus?
                </p>
              </div>
              <div className={classes.homeLowerCards}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  voluptatibus sapiente cum quidem? Quis magnam magni mollitia,
                  aliquid ab rerum, deserunt facilis minima alias sint sapiente
                  amet ipsa beatae, necessitatibus fugit dolores nesciunt
                  tenetur repellendus tempora ipsum sed? Accusamus, laboriosam
                  praesentium. Molestias recusandae dolor perspiciatis incidunt
                  nemo, enim suscipit consectetur?
                </p>
              </div>
            </div>
            <div className={classes.homeBottomContainer}>
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

export default OurStoryContainer;
