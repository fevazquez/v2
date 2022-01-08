import React, { useState, useEffect } from "react";

import {
  StyledSlideShow,
  StyledSlideHolder,
  StyledSideSlide,
  StyledCurrentSlide,
  StyledSlideShowController,
  StyledProject,
} from "./SlideShow.styled";
const SlideShow = ({ projects, interval = 3000 }) => {
  const [previousSlideStyle, setPreviousSlideStyle] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideStyle, setNextSlideStyle] = useState({});
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  useEffect(() => {
    setCurrentSlideStyle(projects[0]);

    if (currentSlide > 0) {
      setPreviousSlideStyle(projects[currentSlide - 1]);
    } else {
      setPreviousSlideStyle(projects[projects.length - 1]);
    }

    if (currentSlide === projects.length - 1) {
      setNextSlideStyle(projects[0]);
    } else {
      setNextSlideStyle(projects[currentSlide + 1]);
    }

    const loop = setInterval(() => {
      if (currentSlide === projects.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, interval);
    return () => clearInterval(loop);
  }, [projects, currentSlide, interval]);

  const previous = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(projects.length - 1);
    }
  };

  const next = () => {
    if (currentSlide === projects.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <StyledSlideShow className="slideshow">
      <StyledSlideHolder className="slide-holder">
        <StyledSideSlide>
          <div className="slide-thumbnail"></div>
        </StyledSideSlide>
        <StyledCurrentSlide>
          <StyledProject className="slide-thumbnail"></StyledProject>
        </StyledCurrentSlide>
        <StyledSideSlide>
          <div className="slide-thumbnail"></div>
        </StyledSideSlide>
      </StyledSlideHolder>
      <StyledSlideShowController>
        <span onClick={previous}>Previous</span>
        <span onClick={next}>Next</span>
      </StyledSlideShowController>
    </StyledSlideShow>
  );
};

export default SlideShow;
