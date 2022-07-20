import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroContainer from "./HeroContainer/HeroContainer";
import JourneyContainer from "./JourneyContainer/JourneyContainer";
import StoryContainer from "./StoryContainer/StoryContainer";
import QuestionContainer from "./QuestionContainer/QuestionContainer";
import ChestoContainer from "./ChestoContainer/ChestoContainer";
import FuturePlanContainer from "./FuturePlanContainer/FuturePlanContainer";

const Home = () => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
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
