import React, { useEffect } from "react";
import Classes from "./TeamCard.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const TeamCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const { image, alter, description } = props;
  return (
    <div
      data-aos="flip-up"
      // data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className={Classes.Card}
    >
      <div className={Classes.header}>
        <div className={Classes.circle}>
          <div className={Classes.img}>
            <img src={image} alt={alter} />
          </div>
        </div>
      </div>
      {description}
    </div>
  );
};

export default TeamCard;
