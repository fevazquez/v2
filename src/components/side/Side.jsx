import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { StyledSideElement } from "./Side.styled";

const Side = ({ children, orientation }) => {
  const [isMounted, setIsMounted] = useState(false);
  const loaderDelay = 1000;
  const isHome = true;

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledSideElement orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition
            classNames={isHome ? "fade" : ""}
            timeout={loaderDelay ? 1000 : 0}
          >
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledSideElement>
  );
};

export default Side;
