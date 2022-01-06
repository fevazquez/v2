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
      {pages.map((page, index) => {
        return (
          <Nav.Item key={index}>
            <Nav.Link href={`#${page.toLowerCase()}`} onClick={clicked}>
              {page}
            </Nav.Link>
          </Nav.Item>
        );
      })}
      <Nav.Item id={4}>
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
