import React from "react";
import Page from "../../Layout/Page";

import HeroContainer from "./HeroContainer/HeroContainer";
import OurStoryContainer from "./OurStoryContainer/OurStoryContainer";
import FounderContainer from "./FounderContainer/FounderContainer";
import CoreTeamContainer from "./CoreTeamContainer/CoreTeamContainer";
import AdvisoryTeamContainer from "./AdvisoryTeamContainer/AdvisoryTeamContainer";

const AboutUs = () => {
  return (
    <Page>
      <div>
        <HeroContainer />
        <OurStoryContainer />
        <FounderContainer />
        <CoreTeamContainer />
        <AdvisoryTeamContainer />
      </div>
    </Page>
  );
};

export default AboutUs;
