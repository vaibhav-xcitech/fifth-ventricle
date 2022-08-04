import React from "react";
import classes from "../FounderContainer/FounderContainer.module.scss";
import useWindowDimensions from "../../Home/WindowDimensions";

import FounderImage from "../../../assets/Hirak Bhai.png";

const FounderContainer = () => {
  const { width } = useWindowDimensions();
  return (
    <div className={classes.homeThirdContainer}>
      <div className={classes.MidleContainer}>
        <div className={classes.LeftMidleContainer}>
          <div className={classes.LeftTopHeader}>
            <h4 style={{ marginBottom: 0, marginTop: 15 }}>THE BRAIN BEHIND</h4>
            <h1 style={{ color: "#5fdad5", marginTop: 0 }}>THE FOUNDER</h1>
          </div>

          {width >= 700 ? (
            ""
          ) : (
            <div className={classes.homeRightContainer}>
              <div className={classes.imgWrapper}>
                <img
                  src={FounderImage}
                  alt="homeImage1"
                  className={classes.image}
                />
              </div>
            </div>
          )}

          <div className={classes.HomeCardsContainer}>
            <div className={classes.homeUpperCards}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                necessitatibus debitis voluptatum qui obcaecati facilis et
                tempore nesciunt blanditiis, adipisci ratione. Iste aliquid quam
                illo suscipit laudantium quia odio error iure dolor architecto,
                eius consequatur laboriosam ullam modi possimus ex tempore
                corporis voluptatum adipisci eligendi! Omnis provident in
                ratione temporibus?
              </p>
            </div>
            <div className={classes.homeLowerCards}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                voluptatibus sapiente cum quidem? Quis magnam magni mollitia,
                aliquid ab rerum, deserunt facilis minima alias sint sapiente
                amet ipsa beatae, necessitatibus fugit dolores nesciunt tenetur
                repellendus tempora ipsum sed? Accusamus, laboriosam
                praesentium. Molestias recusandae dolor perspiciatis incidunt
                nemo, enim suscipit consectetur?
              </p>
            </div>
          </div>
          {/* <div className={classes.homeBottomContainer}>
            <MainButton type="button">
              <b>Know More</b>
            </MainButton>
          </div> */}
        </div>

        {width <= 700 ? (
          ""
        ) : (
          <div className={classes.homeRightContainer}>
            <div className={classes.imgWrapper}>
              <img
                src={FounderImage}
                alt="homeImage1"
                className={classes.image}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FounderContainer;
