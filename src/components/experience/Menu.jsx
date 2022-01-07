import React, { useState } from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { StyledTabPanel, StyledTabs, StyledTab } from "./Menu.styled";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <StyledTabPanel
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="Tab-Panel"
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </StyledTabPanel>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Menu = ({ jobs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        height: 300,
      }}
    >
      <StyledTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { background: "#32cd32" } }}
        sx={{ borderRight: 2, borderColor: "divider" }}
      >
        {jobs.map((job, index) => {
          return <StyledTab label={job.abbreviation} key={index} />;
        })}
      </StyledTabs>
      {jobs.map((job, index) => {
        return (
          <TabPanel value={value} index={index}>
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
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default Menu;
