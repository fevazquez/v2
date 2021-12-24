import React from 'react';

import PortfolioLogo from '../img/logo.svg'
import Circle from '../img/circle.svg'
import "../scss/SplashScreen.scss"
const SplashScreen =()=> {
    
    return(
        <div className="splashScreen">
            <div class="img-container">
                <img src={Circle} className="circle" alt="" />
                <img src={PortfolioLogo} className="logo" alt="Fernando Vazquez" />
            </div>
        </div>
    )
}

export default SplashScreen;