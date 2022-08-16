import React from "react";
import classes from "../JourneyContainer/JourneyContainer.module.scss";
import useWindowDimensions from "../WindowDimensions";
import YouTube from "react-youtube";
// import { MainButton } from "../../../UI/Button/Button";

import OfficeImage2 from "../../../assets/Chesto_Project Research.png";

const JourneyContainer = () => {
  const { width } = useWindowDimensions();

  // const opts = {
  //   height: "390",
  //   width: "640",
  //   playerVars: {
  //     control: 0,
  //     autoplay: 1,
  //   },
  // };

  return (
    <>
      {/* <div className={classes.homeJourney}>
      <div className={classes.container}>
        <div>
        <h4 style={{ marginBottom: 0 }}>THE JOURNEY</h4>
              <h1 style={{ marginTop: 0 }}>PROJECT RESEARCH</h1>
        </div>

        <div className={classes.flexWrapper}>
            <div className={classes.col_md_4}>
                  <div className={classes.imgWrapper}>
                  <img
                  src={OfficeImage2}
                  alt="homeImage1"
                />
                  </div>
            </div>

            <div className="item">
                <div className={classes.contentWrapper}>
                <div className={classes.journeyCardsContainer}>
              <div data-aos="fade-up" className={classes.Card}>
                <div className={classes.header}>
                  <div className={classes.circle}>
                    <div className={classes.img}>
                      <img src={image} alt={alter} />
                    </div>
                  </div>
                </div>
                {description}
              </div>
            </div>
                </div>
            </div>
        </div>

      </div>
      </div> */}

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
              <h4 style={{ marginBottom: 0 }}>THE JOURNEY</h4>
              <h1 style={{ marginTop: 0 }}>PROJECT RESEARCH</h1>
              {/* <h4 style={{ marginTop: "15px", marginBottom: 0 }}>
                MAKING SURE THAT NOTHING GOES PAST YOUR EAR. THE FUTURE OF
              </h4>
              <h2 style={{ marginTop: 0 }}>STETHOSCOPE.</h2> */}
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
              <div data-aos="fade-up" className={classes.Card}>
                <div className={classes.header}>
                  <div className={classes.circle}>
                    <div className={classes.img}>
                      {/* <img src={image} alt={alter} /> */}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 16 }}>
                  <div className={classes.contentContainer}>
                    <p>
                      Introducing long due upgrades in healthcare with our
                      artificial intelligence capabilities. We are continuously
                      improving and enhancing our AI algorithms.
                    </p>
                  </div>
                </p>
              </div>
            </div>
            {/* <div className={classes.journeyBottomContainer}>
              <MainButton type="button">
                <b>Know More</b>
              </MainButton>
            </div> */}
            {/* <div className={classes.YouTubeContainer}>
              <YouTube
                className={classes.YouTube}
                videoId="EjO5poERQ3g"
                opts={opts}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyContainer;
