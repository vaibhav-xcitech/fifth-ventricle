import React, { useEffect } from "react";
import Classes from "./Card.module.scss";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twiter.svg";
import star from "../../assets/star.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const { image, alter, description } = props;
  return (
    <div data-aos="fade-up" data-aos-offset="300" className={Classes.Card}>
      <div className={Classes.header}>
        <div className={Classes.circle}>
          <div className={Classes.img}>
            <img src={image} alt={alter} />
          </div>
        </div>
      </div>
      {description}
      <div className={Classes.footer}>
        <img src={facebook} alt="facebook" width="40" height="40" />
        <img src={twitter} alt="twitter" width="40" height="40" />
        <img src={star} alt="facebook" width="40" height="40" />
      </div>
    </div>
  );
};

export default Card;
