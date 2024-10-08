import React from "react";

import PortfolioLogo from "../../img/logo.svg";
import "../../scss/SplashScreen.scss";

const SplashScreen = () => {
  return (
    <div className="splashScreen">
      <div className="img-container">
        <img src={PortfolioLogo} className="logo" alt="big f" />
      </div>
    </div>
  );
};

export default SplashScreen;
