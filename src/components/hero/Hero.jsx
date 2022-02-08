import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { StyledHero, StyledPic } from "./Hero.styled";

import cartoonSelf from "../../img/v1-removebg.png";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const email = "f4vazquez@gmail.com";

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const greeting = <h1>Hello, I am</h1>;
  const name = <h2 className="big-heading">Fernando Vazquez.</h2>;
  const intro_title = (
    <h3 className="big-heading">Frontend and DevOps Engineer</h3>
  );
  const intro_body = (
    <>
      <p>
        I am a computer engineer that loves building and designing both hardware
        and software components. Currently, I am focused on DevOps operations to
        deliver high quality products to clients over at{" "}
        <a href="https://www.nisum.com/" target="_blank" rel="noreferrer">
          Nisum
        </a>
        .
      </p>
    </>
  );
  const contact = (
    <a
      className="email-link"
      href={`mailto:${email}`}
      target="_blank"
      rel="noreferrer"
    >
      Say hello!
    </a>
  );

  const items = [greeting, name, intro_title, intro_body];

  return (
    <StyledHero>
      {/* <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={0}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup> */}
      <div className="inner">
        <div className="heroText">
          {isMounted &&
            items.map((item, i) => (
              <div key={i} style={{ transitionDelay: `${i + 1}00ms` }}>
                {item}
              </div>
            ))}
        </div>
        <StyledPic>
          <picture className="img">
            <source type="image/avif" srcSet={cartoonSelf} />
            <img src={cartoonSelf} alt="yours truly" />
          </picture>
        </StyledPic>
      </div>
    </StyledHero>
  );
};

export default Hero;
