import React, { useState } from "react";
import classes from "../QuestionContainer/QuestionContainer.module.scss";
import useWindowDimensions from "../WindowDimensions";
import Card from "../../../UI/Card/Card";

import HealthcareImg from "../../../assets/Health.png";
import AIimg from "../../../assets/svgviewer-output (30).svg";
import TelemedicineImg from "../../../assets/telemedicine.png";
import NormalBulb from "../../../assets/01.png";
import lightUpBulb from "../../../assets/02.png";
import lightupshade1 from "../../../assets/03.png";
import lightupshade2 from "../../../assets/04.png";

const QuestionContainer = () => {
  const [image, setImage] = useState(NormalBulb);

  const bulbLightUp = () => {
    if (window.scrollY > 2250) {
      setImage(lightUpBulb);
      if (window.scrollY > 2400) {
        setImage(lightupshade1);
        if (window.scrollY > 2500) {
          setImage(lightupshade2);
        } else {
          setImage(lightupshade1);
        }
      } else {
        setImage(lightUpBulb);
      }
    } else {
      setImage(NormalBulb);
    }
    // console.log(window.scrollY);
  };

  window.addEventListener("scroll", bulbLightUp);


  const { width } = useWindowDimensions();

  return (
    <>
      <div className={classes.homeQuestionContainer}>
        <div className={classes.QuestionTextImgContainer}>
          <h4>THE QUESTION</h4>
          <h1 style={{ color: "#5fdad5", marginTop: 0 }}>WHY FIFTHVENTRICLE</h1>
        </div>

        <div className={classes.bulbImgContainer}>
          {/* {transition(
            (style, item) =>
              item && (
                <animated.img
                  style={style}
                  src={image}
                  alt="BulbLightupImg"
                  className={classes.BulbLightupImg}
                  width="300px"
                  height="300px"
                />
              )
          )} */}

          <img
            src={image}
            alt="BulbLightupImg"
            className={classes.BulbLightupImg}
            width="300px"
            height="300px"
          />
        </div>

        {width < 1150 ? (
          ""
        ) : (
          <div className={classes.infoCards}>
            <div className={classes.cardsRow1}>
              <Card
                image={HealthcareImg}
                description={
                  <>
                    <h3>Accessible Healthcare</h3>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos cum unde maxime sapiente officia debitis officiis
                      voluptate modi temporibus molestiae. Quae incidunt culpa
                      accusamus enim id voluptate perferendis sed voluptatem.
                    </p>
                  </>
                }
              />
            </div>
            <div className={classes.cardsRow2}>
              <Card
                image={AIimg}
                description={
                  <>
                    <h3>Artificial interlligence</h3>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos cum unde maxime sapiente officia debitis officiis
                      voluptate modi temporibus molestiae. Quae incidunt culpa
                      accusamus enim id voluptate perferendis sed voluptatem.
                    </p>
                  </>
                }
              />
            </div>
            <div className={classes.cardsRow3}>
              <Card
                image={TelemedicineImg}
                description={
                  <>
                    <h3>Telemedicine</h3>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos cum unde maxime sapiente officia debitis officiis
                      voluptate modi temporibus molestiae. Quae incidunt culpa
                      accusamus enim id voluptate perferendis sed voluptatem.
                    </p>
                  </>
                }
              />
            </div>
          </div>
        )}

        {width > 1150 ? (
          ""
        ) : (
          <div className={classes.responsiveInfoCards}>
            <div className={classes.cardsRow1}>
              <Card
                image={HealthcareImg}
                description={
                  <>
                    <h3>Accessible Healthcare</h3>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos cum unde maxime sapiente officia debitis officiis
                      voluptate modi temporibus molestiae. Quae incidunt culpa
                      accusamus enim id voluptate perferendis sed voluptatem.
                    </p>
                  </>
                }
              />
              <Card
                image={AIimg}
                description={
                  <>
                    <h3>Artificial interlligence</h3>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos cum unde maxime sapiente officia debitis officiis
                      voluptate modi temporibus molestiae. Quae incidunt culpa
                      accusamus enim id voluptate perferendis sed voluptatem.
                    </p>
                  </>
                }
              />
            </div>
            <div className={classes.cardsRow2}>
              <Card
                image={TelemedicineImg}
                description={
                  <>
                    <h3>Telemedicine</h3>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos cum unde maxime sapiente officia debitis officiis
                      voluptate modi temporibus molestiae. Quae incidunt culpa
                      accusamus enim id voluptate perferendis sed voluptatem.
                    </p>
                  </>
                }
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default QuestionContainer;
