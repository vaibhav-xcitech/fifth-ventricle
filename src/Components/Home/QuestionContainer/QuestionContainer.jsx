import React, { useState, useEffect } from "react";
import classes from "../QuestionContainer/QuestionContainer.module.scss";
import useWindowDimensions from "../WindowDimensions";
import QuestionCart from "../../../UI/QuestionCart/QuestionCart";
import Aos from "aos";
import "aos/dist/aos.css";

import HealthcareImg from "../../../assets/Health.png";
import AIimg from "../../../assets/Artificial Intelligence.png";
import TelemedicineImg from "../../../assets/telemedicine.png";
import NormalBulb from "../../../assets/01.png";
import lightUpBulb from "../../../assets/02.png";
import lightupshade1 from "../../../assets/03.png";
import lightupshade2 from "../../../assets/04.png";

const QuestionContainer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [image, setImage] = useState(NormalBulb);

  const bulbLightUp = () => {
    if (window.screen.width > 1250) {
      if (window.scrollY > 2000) {
        setImage(lightUpBulb);
        if (window.scrollY > 2190) {
          setImage(lightupshade1);
          if (window.scrollY > 2300) {
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
    }
    if (window.screen.width < 1300) {
      if (window.scrollY > 2000) {
        setImage(lightUpBulb);
        if (window.scrollY > 2100) {
          setImage(lightupshade1);
          if (window.scrollY > 2300) {
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
    }
    if (window.screen.width > 800) {
      if (window.scrollY > 1950) {
        setImage(lightUpBulb);
        if (window.scrollY > 2150) {
          setImage(lightupshade1);
          if (window.scrollY > 2300) {
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
    }
    if (window.screen.width < 550) {
      if (window.scrollY > 2800) {
        setImage(lightUpBulb);
        if (window.scrollY > 2900) {
          setImage(lightupshade1);
          if (window.scrollY > 3000) {
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
    }
  };

  window.addEventListener("scroll", bulbLightUp);

  const { width } = useWindowDimensions();

  return (
    <>
      <div className={classes.homeQuestionContainer}>
        <div className={classes.QuestionTextImgContainer}>
          <h4 style={{ marginBottom: 0 }}>THE QUESTION</h4>
          <h1 style={{ color: "#5fdad5", marginTop: 0 }}>WHY FIFTHVENTRICLE</h1>
        </div>

        <div className={classes.bulbImgContainer}>
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
              <QuestionCart
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
              <QuestionCart
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
              <QuestionCart
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
              <QuestionCart
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
              <QuestionCart
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
              <QuestionCart
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
