import React, { useState, useEffect } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import FocusLock from "react-focus-lock";

import Burger from "./burger";
import Menu from "./menu";

import PortfolioLogo from "../../img/logo.svg";
import Resume from "../../Vazquez_Fernando.pdf";

import "../../scss/NavBar.scss";

const NavBar = ({ open, setOpen, node, menuId }) => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 760) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });
  let pages = ["About", "Experience", "Projects", "Contact"];

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
                    <Nav.Link href={`/#${page.toLowerCase()}`}>{page}</Nav.Link>
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
