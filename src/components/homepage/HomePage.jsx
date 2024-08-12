import React from "react";
import { bool } from "prop-types";

import SplashScreen from "../splash";
import Hero from "../hero";
import Socials from "../socials";
import Email from "../email";
import About from "../about";
import Contact from "../contact";
import Experience from "../experience";
import Projects from "../projects";
import Footer from "../footnote";

import "../../scss/HomePage.scss";

const HomePage = ({ isLoading, isMobile }) => {
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
          <Experience isMobile={isMobile} />
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
  isMobile: bool.isRequired
};

export default HomePage;
