import React from "react";
import PropTypes from "prop-types";
import { IconExternal, IconGitHub, IconInstagram, IconLinkedIn } from "./";

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "LinkedIn":
      return <IconLinkedIn />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
