import React from "react";
import { bool } from "prop-types";

import SplashScreen from "./SplashScreen";
import Hero from "./hero";
import Socials from "./socials";
import Email from "./email";
import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Projects from "./projects";
import Footer from "./footnote";

import "../scss/HomePage.scss";

const HomePage = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div className="main-container">
          <Hero />
          <Socials />
          <Email />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

HomePage.propTypes = {
  isLoading: bool.isRequired,
}

export default HomePage;
