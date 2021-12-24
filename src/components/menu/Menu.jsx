import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import '../../scss/NavBar.scss'
import Resume from '../../Vazquez_Fernando.pdf'
const Menu = ({ open, ...props }) => {
  
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <a href="/" tabIndex={tabIndex}>
                About
            </a>
            <a href="/" tabIndex={tabIndex}>
                Experience
            </a>
            <a href="/" tabIndex={tabIndex}>
                Projects
            </a>
            <a href="/" tabIndex={tabIndex}>
                Contact
            </a>
            <a href={Resume} target="_blank" className="resume" rel="noreferrer">
                Resume
            </a>
        </StyledMenu>
    );
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;