import React from "react";
import classes from "../Home/Home.module.scss";
import Page from "../../Layout/Page";

import HeroContainer from "./HeroContainer/HeroContainer";
import JourneyContainer from "./JourneyContainer/JourneyContainer";
import StoryContainer from "./StoryContainer/StoryContainer";
import QuestionContainer from "./QuestionContainer/QuestionContainer";
import ChestoContainer from "./ChestoContainer/ChestoContainer";
import FuturePlanContainer from "./FuturePlanContainer/FuturePlanContainer";

const Home = () => {
  return (
    <Page>
      <div className={classes.homeStyle}>
        <HeroContainer />
        <StoryContainer />
        <JourneyContainer />
        <QuestionContainer />
        <ChestoContainer />
        <FuturePlanContainer />
      </div>
    </Page>
  );
};

export default Home;
