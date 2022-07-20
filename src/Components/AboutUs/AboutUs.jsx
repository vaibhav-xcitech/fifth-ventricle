import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroContainer from "./HeroContainer/HeroContainer";
import OurStoryContainer from "./OurStoryContainer/OurStoryContainer";
import FounderContainer from "./FounderContainer/FounderContainer";
import CoreTeamContainer from "./CoreTeamContainer/CoreTeamContainer";
import AdvisoryTeamContainer from "./AdvisoryTeamContainer/AdvisoryTeamContainer";

const AboutUs = () => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  return (
    <div>
      <HeroContainer />
      <OurStoryContainer />
      <FounderContainer />
      <CoreTeamContainer />
      <AdvisoryTeamContainer />
    </div>
  );
};

export default AboutUs;
