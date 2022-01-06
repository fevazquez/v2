import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Menu from "./Menu";
import {
  StyledJobsSection,
  StyledTabList,
  StyledHighlight,
  StyledTabPanel,
  StyledTabPanels,
  StyledTabButton,
} from "./Experience.styled";

const Experience = () => {
  const jobs = [
    {
      title: "DevOps Engineer",
      company: "Nisum",
      date: "September 2021 - Present",
      description: "Description 1",
      url: "https://www.nisum.com/",
    },
    {
      title: "Rearch Assistant",
      company: "Scripps Orbit and Permament Array Center (SOPAC)",
      date: "June 2019 - September 2021",
      description:
        "Built and maintained a web application to improve and expand working with large GPS and seismic data sets including real-time collection, quality control, analysis, display, and documentation",
      url: "http://sopac-csrc.ucsd.edu/",
    },
    {
      title: "Student Avionics Engineer",
      company: "Rocket Propulsion Laboratory (RPL)",
      date: "October 2018 - June 2019",
      description:
        "Over the course of a year, I worked with 3 undergraduates to redesign, test, and implement Avionics devices to construct an engine controller unit, GPS, and a command/recovery system. We produced a BJT transistor array PCB to properly toggle relays and an INA326 instrumentation amplifier array PCB to amplify pressure transducer readings",
      url: "https://rocketproplab.org/",
    },
    {
      title: "Warehouse Logistics & IT",
      company: "Socksmith Design",
      date: "March 2016 - August 2018",
      description:
        "Established new company workstations, setting up user profiles in the database and setting their appropriate permissions with the inventory management software. I overlooked inventory anf fixed any issues and bugs in the system using SQL, excel, and python scripts",
      url: "https://www.socksmith.com/",
    },
  ];

  const KEY_CODES = {
    ARROW_LEFT: "ArrowLeft",
    ARROW_LEFT_IE11: "Left",
    ARROW_RIGHT: "ArrowRight",
    ARROW_RIGHT_IE11: "Right",
    ARROW_UP: "ArrowUp",
    ARROW_UP_IE11: "Up",
    ARROW_DOWN: "ArrowDown",
    ARROW_DOWN_IE11: "Down",
    ESCAPE: "Escape",
    ESCAPE_IE11: "Esc",
    TAB: "Tab",
    SPACE: " ",
    SPACE_IE11: "Spacebar",
    ENTER: "Enter",
  };

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);

  useEffect(() => {
    // sr.reveal(revealContainer.current, srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <StyledJobsSection>
      <h2 className="numbered-heading">My Experience</h2>
      {/* <Menu /> */}

      <div className="inner">
        <StyledTabList
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={(e) => onKeyDown(e)}
        >
          {jobs &&
            jobs.map((job, i) => {
              return (
                <StyledTabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={(el) => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? "0" : "-1"}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}
                >
                  <span>{job.company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobs &&
            jobs.map((job, i) => {
              return (
                <CSSTransition
                  key={i}
                  in={activeTabId === i}
                  timeout={250}
                  classNames="fade"
                >
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? "0" : "-1"}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}
                  >
                    <h3>
                      <span>{job.title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={job.url} className="inline-link">
                          {job.company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{job.date}</p>

                    <div
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    />
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Experience;
