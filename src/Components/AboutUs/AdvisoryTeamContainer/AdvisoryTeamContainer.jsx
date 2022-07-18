import React, { useEffect } from "react";
import classes from "../AdvisoryTeamContainer/AdvisoryTeamContainer.module.scss";
import TeamCard from "../../../UI/TeamCard/TeamCard";
import Aos from "aos";
import "aos/dist/aos.css";


import GeneralSurgeonImg from "../../../assets/svgviewer-output (17).svg";
import MBBS1Img from "../../../assets/svgviewer-output (16).svg";
import MBBS2Img from "../../../assets/svgviewer-output (15).svg";
import ToddlerImg from "../../../assets/svgviewer-output (21).svg";

const AdvisoryTeamContainer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={classes.ExtraTeamContainer}>
      <div className={classes.teamHeaderContainer}>
        <h4 style={{ marginBottom: 0 }}>THE SQUAD</h4>
        <h1 style={{ color: "#5fdad5", marginTop: 0 }}>THE ADVISORY TEAM</h1>
      </div>
      <div className={classes.teamCardsContainer}>
        <div className={classes.ExtraTeamRow}>
          <TeamCard
            image={GeneralSurgeonImg}
            description={
              <>
                <h3>Dr. Hasmukh Chhatbar</h3>
                <h4>-Ganeral Surgeon</h4>
                <br />
                <p style={{ textAlign: "left" }}>
                  Dr. Chhatbar is a General Surgeon bringing massive experience
                  of 30 years at the table. His advice on audio reception has
                  been invaluable.
                </p>
              </>
            }
          />

          <TeamCard
            image={MBBS1Img}
            description={
              <>
                <h3>Dr. Rajeshri Desai</h3>
                <h4>-MBBS</h4>
                <br />
                <p style={{ textAlign: "left" }}>
                  Popularly known as Doctor with a Difference, Dr. Rajeshree’s
                  insights on application of smart diagnostics in rural areas
                  has been game changer for us.
                </p>
              </>
            }
          />
        </div>
        <div className={classes.ExtraTeamRow}>
          <TeamCard
            image={MBBS2Img}
            description={
              <>
                <h3>Dr. Vishrant Amin</h3>
                <h4>-MBBS</h4>
                <br />
                <p style={{ textAlign: "left" }}>
                  A fellow doctor and USMLE aspirant, Dr. Vishrant has always
                  been spot on with his inputs on practical application and
                  usability of digital diagnostic devices.
                </p>
              </>
            }
          />
          <TeamCard
            image={ToddlerImg}
            description={
              <>
                <h3>Kiaan Shah</h3>
                <h4>-TODDLER</h4>
                <br />
                <p style={{ textAlign: "left" }}>
                  Just like him, we too are learning to walk through the
                  start-up ecosystem. His ability to get back up every time
                  after falling has been our inspiration.
                </p>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AdvisoryTeamContainer;
