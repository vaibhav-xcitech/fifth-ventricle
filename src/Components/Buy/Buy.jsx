import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "./Buy.module.scss";
import { MainButton } from "../../UI/Button/Button";
import useWindowDimensions from "../Home/WindowDimensions";
import Aos from "aos";
import "aos/dist/aos.css";

import heroImage from "../../assets/Chesto_Buy_2.png";
import discriptionImg from "../../assets/Chesto_Buy_1.png";

const Buy = () => {

  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 1500 });
    window.scrollTo(0, 0);
  }, [location]);

  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/chestoBuy/buyNow");
  };

  return (
    <div className={classes.buyContainer}>
      <div data-aos="fade-up" className={classes.heroContainer}>
        <img src={heroImage} alt="HeroImage" width={"100%"} />
      </div>

      <div className={classes.buyChestoContainer}>
        <div className={classes.chestoDesc}>
          <div className={classes.descHeader}>
            <h2 style={{ textDecoration: "underline" }}>DESCRIPTION</h2>
            <br />
            {width >= 700 ? (
              ""
            ) : (
              <>
                <div className={classes.chestoImg}>
                  <img
                    src={discriptionImg}
                    alt="Chesto"
                    width="250px"
                    height="250px"
                  />
                </div>
                <br />
              </>
            )}
            <p style={{ textAlign: "Left" }}>
              Amet bibendum lacus varius sed. Tortor elit laoreet urna, id ac
              nullam. Vulputate eget sed semper est. Fusce felis phasellus
              malesuada id faucibus ac, mattis. Nunc sed purus eget facilisis
              pharetra pretium bibendum tempor feugiat. Posuere enim amet,
              facilisis id amet tincidunt risus. Amet, interdum et diam feugiat.
              <br />A nullam nibh integer hendrerit varius. Ut mi turpis
              fringilla convallis. Egestas sit facilisis accumsan, vestibulum
              elementum amet. Ut vel pretium aliquet erat est id arcu tempus.
              Ultricies in mattis mi vitae sagittis elit volutpat nullam
              condimentum. Non, quis enim hac erat nibh adipiscing cursus
              eleifend. Mattis ipsum libero.
            </p>
            <br />
            <h3>Price : &#x20b9; 9,999 - &#x20b9; 11,490</h3>
            <MainButton style={{ padding: "5px 65px" }} onClick={handleOnClick}>
              BUY
            </MainButton>
          </div>
        </div>
        {width <= 700 ? (
          ""
        ) : (
          <div className={classes.chestoImg}>
            <img
              src={discriptionImg}
              alt="Chesto"
              width="350px"
              height="250px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Buy;
