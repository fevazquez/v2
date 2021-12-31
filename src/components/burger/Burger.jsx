import React from 'react';
import { bool, func } from 'prop-types';
import { Squash } from 'hamburger-react'

const Burger = ({ open, setOpen, ...props }) => {
  return (
        <div className="burger"> 
             <Squash toggled={open} toggle={setOpen} color="#00fffb" onClick={() => setOpen(!open)} {...props}/>
        </div>
  );
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;