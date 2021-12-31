import React from 'react';

import Hero from './hero';
import Socials from './socials';
import Email from './email';
import About from './about';
import Contact from './contact';

import "../scss/HomePage.scss"

const HomePage = () => {
    return (
        <div className="main-container">
            <Hero />
            <Socials />
            <Email />
            <About />
            <Contact />
        </div>
    );
};

export default HomePage;