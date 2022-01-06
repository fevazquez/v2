import React, { useState } from "react";
import PropTypes from "prop-types";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Menu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const jobs = [
    {
      title: "DevOps Engineer",
      location: "Nisum",
      date: "September 2021 - Present",
      description: "Description 1",
      url: "https://www.nisum.com/",
    },
    {
      title: "Rearch Assistant",
      location: "Scripps Orbit and Permament Array Center (SOPAC)",
      date: "June 2019 - September 2021",
      description:
        "Built and maintained a web application to improve and expand working with large GPS and seismic data sets including real-time collection, quality control, analysis, display, and documentation",
      url: "http://sopac-csrc.ucsd.edu/",
    },
    {
      title: "Student Avionics Engineer",
      location: "Rocket Propulsion Laboratory (RPL)",
      date: "October 2018 - June 2019",
      description:
        "Over the course of a year, I worked with 3 undergraduates to redesign, test, and implement Avionics devices to construct an engine controller unit, GPS, and a command/recovery system. We produced a BJT transistor array PCB to properly toggle relays and an INA326 instrumentation amplifier array PCB to amplify pressure transducer readings",
      url: "https://rocketproplab.org/",
    },
    {
      title: "Warehouse Logistics & IT",
      location: "Socksmith Design",
      date: "March 2016 - August 2018",
      description:
        "Established new company workstations, setting up user profiles in the database and setting their appropriate permissions with the inventory management software. I overlooked inventory anf fixed any issues and bugs in the system using SQL, excel, and python scripts",
      url: "https://www.socksmith.com/",
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#fff",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {jobs.map((job, index) => {
          return <Tab label={job.location} {...a11yProps(index)} />;
        })}
      </Tabs>
      {jobs.map((job, index) => {
        return (
          <TabPanel value={value} index={index}>
            {job.description}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default Menu;
