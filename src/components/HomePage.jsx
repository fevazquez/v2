import React, { useState, useEffect } from 'react';

import Hero from './hero';
import Socials from './socials';
import Email from './email';

import "../scss/HomePage.scss"

const HomePage = () => {
    return (
        <div className="main-container">
            <Hero />
            <Socials />
            <Email />
        </div>
    );
};

export default HomePage;