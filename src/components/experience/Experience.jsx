import React from "react";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { jobs } from "../../config";
import { StyledJobsSection } from "./Experience.styled";

const Experience = ({ isMobile }) => {
  return (
    <StyledJobsSection id="experience">
      <h2 className="numbered-heading">My Experience</h2>
      {isMobile ? <MobileMenu jobs={jobs} /> : <Menu jobs={jobs} />}
    </StyledJobsSection>
  );
};

export default Experience;
