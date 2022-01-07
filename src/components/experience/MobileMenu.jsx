import React from "react";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledTypography,
} from "./MobileMenu.styled";

const MobileMenu = ({ jobs }) => {
  return (
    <>
      {jobs.map((job, index) => {
        return (
          <>
            <StyledAccordion>
              <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={index}
              >
                <StyledTypography>{job.abbreviation}</StyledTypography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography>
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

                  <div dangerouslySetInnerHTML={{ __html: job.description }} />
                </Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          </>
        );
      })}
    </>
  );
};

export default MobileMenu;
