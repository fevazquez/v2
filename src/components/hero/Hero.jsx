import React, { useState, useEffect } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { StyledHero, StyledPic } from "./Hero.styled";

import cartoonSelf from "../../img/v1-removebg.png";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const greeting = <h1>Hello, I am</h1>;
  const name = <h2 className="big-heading">Fernando Vazquez.</h2>;
  const intro_title = (
    <h3 className="big-heading">Software developer and DevOps enthusiast.</h3>
  );
  const intro_body = (
    <>
      <p>
        Currently, I am focused on software development to deliver the best
        customer experience over at{" "}
        <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
          Amazon Web Services
        </a>
        .
      </p>
    </>
  );

  const items = [greeting, name, intro_title, intro_body];

  return (
    <StyledHero>
      <div className="inner">
        <TransitionGroup component={null}>
          <div className="heroText">
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={0}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </div>
          <StyledPic>
            <picture className="img">
              <source type="image/avif" srcSet={cartoonSelf} />
              <img src={cartoonSelf} alt="yours truly" />
            </picture>
          </StyledPic>
        </TransitionGroup>
      </div>
    </StyledHero>
  );
};

export default Hero;
