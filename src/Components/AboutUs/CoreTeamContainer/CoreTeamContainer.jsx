import React from "react";
import classes from "../CoreTeamContainer/CoreTeamContainer.module.scss";
import useWindowDimensions from "../../Home/WindowDimensions";
import Card from "../../../UI/Card/Card";

import DesignerImage from "../../../assets/svgviewer-output (11).svg";
import MLEngineerImg from "../../../assets/svgviewer-output (10).svg";
import MobileEngineerImg from "../../../assets/svgviewer-output (20).svg";
import EmbaddedSystem from "../../../assets/svgviewer-output (14).svg";
import SalesManager from "../../../assets/svgviewer-output (13).svg";

const CoreTeamContainer = () => {

  const { width } = useWindowDimensions();

  return (
    <div className={classes.teamContainer}>
      <div className={classes.teamHeaderContainer}>
        <h4 style={{ marginBottom: 0 }}>THE SQUAD</h4>
        <h1 style={{ color: "#5fdad5", marginTop: 0 }}>THE CORE TEAM</h1>
      </div>
      {width <= 700 ? (
        ""
      ) : (
        <div className={classes.teamCardsContainer}>
          <div className={classes.teamCardRow1}>
            <Card
              image={DesignerImage}
              description={
                <>
                  <h3>Dhruvil Panchal</h3>
                  <h4>-3D Generalist and product Designer</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro nemo aliquid molestiae vero odit, quisquam iusto est
                    quia laudantium omnis fuga. Quo soluta eligendi iure dolore
                    totam voluptatem libero repellendus?
                  </p>
                  <br />
                </>
              }
            />

            <Card
              image={MobileEngineerImg}
              description={
                <>
                  <h3>Jemis Goti</h3>
                  <h4>-Mobile App And Machine Learning</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro nemo aliquid molestiae vero odit, quisquam iusto est
                    quia laudantium omnis fuga. Quo soluta eligendi iure dolore
                    totam voluptatem libero repellendus?
                  </p>
                  <br />
                </>
              }
            />

            {width <= 950 ? (
              ""
            ) : (
              <Card
                image={MLEngineerImg}
                description={
                  <>
                    <h3>Rinkesh Panwar</h3>
                    <h4>-Machine Learning Engineer</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro nemo aliquid molestiae vero odit, quisquam iusto est
                      quia laudantium omnis fuga. Quo soluta eligendi iure
                      dolore totam voluptatem libero repellendus?
                    </p>
                    <br />
                  </>
                }
              />
            )}
          </div>

          {width >= 950 ? (
            ""
          ) : (
            <Card
              image={MLEngineerImg}
              description={
                <>
                  <h3>Rinkesh Panwar</h3>
                  <h4>-Machine Learning Engineer</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro nemo aliquid molestiae vero odit, quisquam iusto est
                    quia laudantium omnis fuga. Quo soluta eligendi iure dolore
                    totam voluptatem libero repellendus?
                  </p>
                  <br />
                </>
              }
            />
          )}

          {width <= 700 ? (
            ""
          ) : (
            <div className={classes.teamCardRow2}>
              <Card
                image={EmbaddedSystem}
                description={
                  <>
                    <h3>Karun Dobariya</h3>
                    <h4>-Embadded Systems</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro nemo aliquid molestiae vero odit, quisquam iusto est
                      quia laudantium omnis fuga. Quo soluta eligendi iure
                      dolore totam voluptatem libero repellendus?
                    </p>
                    <br />
                  </>
                }
              />

              <Card
                image={SalesManager}
                description={
                  <>
                    <h3>Mrunal Gayakwad</h3>
                    <h4>-Area Sales Manager</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro nemo aliquid molestiae vero odit, quisquam iusto est
                      quia laudantium omnis fuga. Quo soluta eligendi iure
                      dolore totam voluptatem libero repellendus?
                    </p>
                    <br />
                  </>
                }
              />
            </div>
          )}
        </div>
      )}

      {width > 700 ? (
        ""
      ) : (
        <div className={classes.teamResponsiveCard}>
          <div className={classes.teamResponsiveRow1}>
            <Card
              image={DesignerImage}
              description={
                <>
                  <h3>Dhruvil Panchal</h3>
                  <h4>-3D Generalist and product Designer</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro nemo aliquid molestiae vero odit, quisquam iusto est
                    quia laudantium omnis fuga. Quo soluta eligendi iure dolore
                    totam voluptatem libero repellendus?
                  </p>
                  <br />
                </>
              }
            />
          </div>

          <div className={classes.teamResponsiveRow2}>
            <Card
              image={MobileEngineerImg}
              description={
                <>
                  <h3>Jemis Goti</h3>
                  <h4>-Mobile App And Machine Learning</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro nemo aliquid molestiae vero odit, quisquam iusto est
                    quia laudantium omnis fuga. Quo soluta eligendi iure dolore
                    totam voluptatem libero repellendus?
                  </p>
                  <br />
                </>
              }
            />
          </div>

          <div className={classes.teamResponsiveRow3}>
            <Card
              image={MLEngineerImg}
              description={
                <>
                  <h3>Rinkesh Panwar</h3>
                  <h4>-Machine Learning Engineer</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro nemo aliquid molestiae vero odit, quisquam iusto est
                    quia laudantium omnis fuga. Quo soluta eligendi iure dolore
                    totam voluptatem libero repellendus?
                  </p>
                  <br />
                </>
              }
            />
          </div>

          <div className={classes.teamResponsiveRow4}>
            <Card
              image={EmbaddedSystem}
              description={
                <>
                  <h3>Karun Dobariya</h3>
                  <h4>-Embadded Systems</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro nemo aliquid molestiae vero odit, quisquam iusto est
                    quia laudantium omnis fuga. Quo soluta eligendi iure dolore
                    totam voluptatem libero repellendus?
                  </p>
                  <br />
                </>
              }
            />
          </div>

          <div className={classes.teamResponsiveRow4}>
            <Card
              image={SalesManager}
              description={
                <>
                  <h3>Mrunal Gayakwad</h3>
                  <h4>-Area Sales Manager</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro nemo aliquid molestiae vero odit, quisquam iusto est
                    quia laudantium omnis fuga. Quo soluta eligendi iure dolore
                    totam voluptatem libero repellendus?
                  </p>
                  <br />
                </>
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CoreTeamContainer;
