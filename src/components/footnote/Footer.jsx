import React from "react";

import { Icon } from "../icons";
import { StyledFooter, StyledSocialLinks, StyledCredit } from "./Footer.styled";
const Footer = () => {
  let socialMedia = [
    {
      name: "GitHub",
      url: "https://github.com/fevazquez",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/itsfernanflow/",
    },
  ];
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>
      <StyledCredit>
        <div>Built by Fernando Vazquez</div>
        {/* <a href="https://github.com/bchiang7/v4">
          <div>Inspired by Brittany Chiang</div>
        </a> */}
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
