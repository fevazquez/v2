import React from "react";

import { Icon } from "../icons";
import { socialMedia } from "../../config";
import { StyledFooter, StyledSocialLinks, StyledCredit } from "./Footer.styled";

const Footer = () => {
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
        <a href="https://github.com/bchiang7/v4">
          <div>With inspiration from Brittany Chiang</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
