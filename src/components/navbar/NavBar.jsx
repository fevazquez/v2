import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import FocusLock from "react-focus-lock";
import { useNavigate } from 'react-router-dom';

import Burger from "./burger";
import Menu from "./menu";

import PortfolioLogo from "../../img/logo.svg";
import Resume from "../../Vazquez_Fernando.pdf";

import "../../scss/NavBar.scss";

const NavBar = ({ open, setOpen, isMobile, node, menuId }) => {
  const pages = ["About", "Experience", "Projects", "Contact"];

  const navigate = useNavigate();

  const handleNavClick = (page) => {
    const anchor = `#${page.toLowerCase()}`;
    navigate(`/${anchor}`);
  };

  return (
    <Navbar className="fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img src={PortfolioLogo} className="logo" alt="Fernando Vazquez" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {isMobile ? (
            <Nav>
              <div ref={node}>
                <FocusLock disabled={!open}>
                  <Burger
                    open={open}
                    setOpen={setOpen}
                    aria-controls={menuId}
                  />
                  <Menu open={open} setOpen={setOpen} id={menuId} />
                </FocusLock>
              </div>
            </Nav>
          ) : (
            <Nav>
              {pages.map((page, idx) => {
                return (
                  <Nav.Item key={idx}>
                    <Nav.Link onClick={() => handleNavClick(page)}>{page}</Nav.Link>
                  </Nav.Item>
                );
              })}
              <Nav.Item key={4}>
                <Nav.Link href={Resume} target="_blank" className="resume">
                  Resume
                </Nav.Link>
              </Nav.Item>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
