import React from "react";

import { Link } from "react-router-dom";
import { StyledNotFound } from "./NotFound.styled";

const NotFound = () => {
  return (
    <StyledNotFound>
      <h2 className="title">404</h2>
      <p>Not Found :(</p>
      <Link to="/" className="bigButton">
        Home
      </Link>
    </StyledNotFound>
  );
};

export default NotFound;
