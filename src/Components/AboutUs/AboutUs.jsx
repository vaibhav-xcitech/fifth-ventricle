import React from "react";

import HeroContainer from "./HeroContainer/HeroContainer";
import OurStoryContainer from "./OurStoryContainer/OurStoryContainer";
import FounderContainer from "./FounderContainer/FounderContainer";
import CoreTeamContainer from "./CoreTeamContainer/CoreTeamContainer";
import AdvisoryTeamContainer from "./AdvisoryTeamContainer/AdvisoryTeamContainer";

const AboutUs = () => {
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
