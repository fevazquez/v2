import React from "react";

import { bool } from "prop-types";
import { Nav } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import Resume from "../../../Vazquez_Fernando.pdf";

import { StyledMenu } from "./Menu.styled";
import "../../../scss/NavBar.scss";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;
  let pages = ["About", "Experience", "Projects", "Contact"];

  const clicked = () => {
    props.setOpen(false);
  };

  const navigate = useNavigate();

  const handleNavClick = (page) => {
    clicked();
    const anchor = `#${page.toLowerCase()}`;
    navigate(`/${anchor}`);

    const section = document.getElementById(page.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {pages.map((page, idx) => {
        return (
          <Nav.Item key={idx}>
           <Nav.Link onClick={() => handleNavClick(page)}>{page}</Nav.Link>
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
