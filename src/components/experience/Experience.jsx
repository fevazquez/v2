import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { StyledJobsSection } from "./Experience.styled";

const Experience = () => {
  const jobs = [
    {
      title: "DevOps Engineer",
      company: "Nisum",
      abbreviation: "Nisum",
      date: "September 2021 - Present",
      description: "Description 1",
      url: "https://www.nisum.com/",
    },
    {
      title: "Rearch Assistant",
      company: "Scripps Orbit and Permament Array Center",
      abbreviation: "SOPAC",
      date: "June 2019 - September 2021",
      description:
        "Built and maintained a web application to improve and expand working with large GPS and seismic data sets including real-time collection, quality control, analysis, display, and documentation",
      url: "http://sopac-csrc.ucsd.edu/",
    },
    {
      title: "Student Avionics Engineer",
      company: "Rocket Propulsion Laboratory",
      abbreviation: "RPL",
      date: "October 2018 - June 2019",
      description:
        "Over the course of a year, I worked with 3 undergraduates to redesign, test, and implement Avionics devices to construct an engine controller unit, GPS, and a command/recovery system. We produced a BJT transistor array PCB to properly toggle relays and an INA326 instrumentation amplifier array PCB to amplify pressure transducer readings",
      url: "https://rocketproplab.org/",
    },
    {
      title: "Warehouse Logistics & IT",
      company: "Socksmith Design",
      abbreviation: "Socksmith",
      date: "March 2016 - August 2018",
      description:
        "Established new company workstations, setting up user profiles in the database and setting their appropriate permissions with the inventory management software. I overlooked inventory anf fixed any issues and bugs in the system using SQL, excel, and python scripts",
      url: "https://www.socksmith.com/",
    },
  ];

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
