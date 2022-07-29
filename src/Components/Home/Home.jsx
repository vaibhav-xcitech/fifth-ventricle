import React from "react";

import HeroContainer from "./HeroContainer/HeroContainer";
import JourneyContainer from "./JourneyContainer/JourneyContainer";
import StoryContainer from "./StoryContainer/StoryContainer";
import QuestionContainer from "./QuestionContainer/QuestionContainer";
import ChestoContainer from "./ChestoContainer/ChestoContainer";
import FuturePlanContainer from "./FuturePlanContainer/FuturePlanContainer";

const Home = () => {

  return (
    <div>
      <HeroContainer />
      <StoryContainer />
      <JourneyContainer />
      <QuestionContainer />
      <ChestoContainer />
      <FuturePlanContainer />
    </div>
  );
};

export default Home;
