import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import FocusLock from 'react-focus-lock';

import PortfolioLogo from '../img/logo.svg'
import Resume from '../Vazquez_Fernando.pdf'

import Burger from './burger';
import Menu from './menu';

import '../scss/NavBar.scss';

const NavBar = ({open, setOpen, node, menuId}) => {
    const [isMobile, setIsMobile] = useState(false);

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 760) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
  
    // create an event listener
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize)
    })
    let pages = ['About', 'Experience', 'Projects', 'Contact'];

    return (
        <Navbar className="fixed-top">
            <Container>
                <Navbar.Brand href="/">
                    <img src={PortfolioLogo} className="logo" alt="Fernando Vazquez" />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {isMobile ? (
                        <Nav>
                            <FocusLock disabled={!open}>
                                <div ref={node}>
                                    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                    <Menu open={open} setOpen={setOpen} id={menuId} />
                                </div>
                            </FocusLock>
                        </Nav>
                    ) : (
                        <Nav>
                            {pages.map((page, index) => {
                                return (
                                    <Nav.Item id={index}> 
                                        <Nav.Link href={`#${page.toLowerCase()}`}>{page}</Nav.Link>
                                    </Nav.Item>
                                );
                            })}
                            <Nav.Item>
                                <Nav.Link href={Resume} target="_blank" className="resume">Resume</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;