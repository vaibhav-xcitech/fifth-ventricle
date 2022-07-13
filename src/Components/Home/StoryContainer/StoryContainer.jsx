import React from "react";
import classes from "../StoryContainer/StoryContainer.module.scss";
import { MainButton } from "../../../UI/Button/Button";
import useWindowDimensions from "../WindowDimensions";

import OfficeImage1 from "../../../assets/Chesto_Who We Are.png";

const StoryContainer = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={classes.homeStoryContainer}>
      <div className={classes.storyMainContainer}>
        <div className={classes.storyMidleContainer}>
          <div className={classes.midleHeaderContainer}>
            <h4 style={{ marginBottom: 0 }}>THE STORY</h4>
            <h1 style={{ color: "#5fdad5", marginTop: 0 }}>WHO WE ARE</h1>
          </div>

          {width >= 700 ? (
            ""
          ) : (
            <div className={classes.homeRightContainer}>
              <div className={classes.imgWrapper}>
                <img
                  src={OfficeImage1}
                  alt="homeImage3"
                  className={classes.image}
                />
              </div>
            </div>
          )}

          <div className={classes.storyCardsContainer}>
            <div className={classes.storyUpperCards}>
              <div className={classes.storyCards}>
                <h2>OUR STORY</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia veniam repudiandae impedit odio placeat repellat,
                  velit eaque quae illum ab!
                </p>
              </div>
              <div className={classes.storyCards}>
                <h2>OUR VISION</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia veniam repudiandae impedit odio placeat repellat,
                  velit eaque quae illum ab!
                </p>
              </div>
            </div>
            <div className={classes.storyLowerCards}>
              <div className={classes.storyCards}>
                <h2>OUR MISSION</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia veniam repudiandae impedit odio placeat repellat,
                  velit eaque quae illum ab!
                </p>
              </div>
              <div className={classes.storyCards}>
                <h2>OUR GOALS</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia veniam repudiandae impedit odio placeat repellat,
                  velit eaque quae illum ab!
                </p>
              </div>
            </div>
          </div>
          <div className={classes.journeyBottomContainer}>
            <MainButton type="button">
              <b>Know More</b>
            </MainButton>
          </div>
        </div>

        {width <= 700 ? (
          ""
        ) : (
          <div className={classes.homeRightContainer}>
            <div className={classes.imgWrapper}>
              <img
                src={OfficeImage1}
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

export default StoryContainer;
