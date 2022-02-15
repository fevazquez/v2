import React from "react";

import { bool } from "prop-types";
import { Nav } from "react-bootstrap";

import Resume from "../../Vazquez_Fernando.pdf";

import { StyledMenu } from "./Menu.styled";
import "../../scss/NavBar.scss";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;
  let pages = ["About", "Experience", "Projects", "Contact"];

  const clicked = () => {
    props.setOpen(false);
  };

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {pages.map((page, idx) => {
        return (
          <Nav.Item key={idx}>
            <Nav.Link href={`#${page.toLowerCase()}`} onClick={clicked}>
              {page}
            </Nav.Link>
          </Nav.Item>
        );
      })}
      <Nav.Item key={4}>
        <Nav.Link
          href={Resume}
          onClick={clicked}
          target="_blank"
          className="resume"
        >
          Resume
        </Nav.Link>
      </Nav.Item>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
