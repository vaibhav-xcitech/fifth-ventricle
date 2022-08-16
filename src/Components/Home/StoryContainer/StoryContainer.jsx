import React, { useEffect } from "react";
import classes from "../StoryContainer/StoryContainer.module.scss";
// import { MainButton } from "../../../UI/Button/Button";
import useWindowDimensions from "../WindowDimensions";
import Aos from "aos";
import "aos/dist/aos.css";

import OfficeImage1 from "../../../assets/Chesto_Who We Are.png";

const StoryContainer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const { width } = useWindowDimensions();

  return (
    <div className={classes.homeStoryContainer}>
      <div className={classes.storyMainContainer}>
        <div className={classes.storyMidleContainer}>
          <div className={classes.midleHeaderContainer}>
            <h4 style={{ marginBottom: 0 }}>THE STORY</h4>
            <h1 style={{ color: "#E9D206", marginTop: 0 }}>WHO WE ARE</h1>
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
            <div data-aos="flip-left" className={classes.storyUpperCards}>
              <div className={classes.storyCards}>
                <h4>OUR STORY</h4>
                <p>
                  We are a dedicated group of tech-savvy enthusiasts headed by
                  an equally committed doctor. Our agility to think in multiple
                  dimensions has helped us to evolve our product during R&#38;D
                  stages.
                </p>
              </div>
              <div className={classes.storyCards}>
                <h4>OUR VISION</h4>
                <p>
                  To empower, inspire, and enhance the quality of life for a
                  vast number of people with our innovations and to inspire hope
                  by providing the best innovation to the world through
                  integrated education and research.
                </p>
              </div>
            </div>
            <div data-aos="flip-right" className={classes.storyLowerCards}>
              <div className={classes.storyCards}>
                <h4>OUR MISSION</h4>
                <p>
                  To bring much required and long due innovations in the medical
                  industry is our motto from day 1. We are on a journey of
                  easing diagnosis and reducing apprehension or anxiety on both
                  the sides – the patient and the doctor.
                </p>
              </div>
              <div className={classes.storyCards}>
                <h4>OUR GOALS</h4>
                <p>
                  Keeping patient safety in mind, our goal is to build
                  Artificial Intelligence that is Reliable, Predictable, and
                  Consistent; hence improving the overall diagnosis of one’s
                  health. We are constantly thinking of new ideas and improving
                  our products.
                </p>
              </div>
            </div>
          </div>
          {/* <div className={classes.journeyBottomContainer}>
            <MainButton type="button" onClick={() => navigate("./aboutus")}>
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
