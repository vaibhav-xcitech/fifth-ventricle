import React from "react";
import classes from "../JourneyContainer/JourneyContainer.module.scss";
import useWindowDimensions from "../WindowDimensions";
// import { MainButton } from "../../../UI/Button/Button";

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
              <h4 style={{ marginBottom: 0 }}>THE JOURNEY</h4>
              <h1 style={{ color: "#5fdad5", marginTop: 0 }}>
                PROJECT RESEARCH
              </h1>
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
              <div className={classes.journeyUpperContainer}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio officia mollitia quibusdam possimus neque provident. Animi temporibus sequi accusantium, pariatur omnis provident quisquam deleniti eos dolorum nesciunt tenetur architecto excepturi illum incidunt quibusdam fugit, ullam ad aut rerum sunt libero praesentium eum odio? Consequuntur, tempora quidem reprehenderit facilis eum praesentium nemo eius, cum quae perferendis laudantium. Sint, sapiente praesentium.
                </p>
              </div>
              <div className={classes.journeyLowerContainer}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dicta deleniti quidem, perspiciatis dolore similique. Consequatur, consequuntur at exercitationem voluptatum perspiciatis eaque sed, odit saepe nemo alias ullam corporis tempore dignissimos voluptate nostrum cumque autem hic. Sed tempore aliquid a. Temporibus autem fugit distinctio id magnam perspiciatis. Atque odio vero facilis deserunt nam. Labore obcaecati voluptatum illo atque voluptates in.
                </p>
              </div>
            </div>
            {/* <div className={classes.journeyBottomContainer}>
              <MainButton type="button">
                <b>Know More</b>
              </MainButton>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyContainer;
