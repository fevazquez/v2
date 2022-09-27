import React from "react";

import { StyledSocialList } from "./Socials.styled";
import { Side } from "../";
import { Icon } from "../icons";
import { socialMedia } from "../../config";

const Socials = () => {
  return (
    <Side orientation="left">
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocialList>
    </Side>
  );
};

export default Socials;
