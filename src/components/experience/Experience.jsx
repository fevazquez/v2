import React, { useState, useEffect } from "react";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { jobs } from "../../config";
import { StyledJobsSection } from "./Experience.styled";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 760) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  return (
    <StyledJobsSection id="experience">
      <h2 className="numbered-heading">My Experience</h2>
      {isMobile ? <MobileMenu jobs={jobs} /> : <Menu jobs={jobs} />}
    </StyledJobsSection>
  );
};

export default Experience;
