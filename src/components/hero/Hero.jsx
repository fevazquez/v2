import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { StyledHero } from './Hero.styled'

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 1000);
        return () => clearTimeout(timeout);
    }, []);

    const greeting = <h1>Hello, my name is</h1>;
    const name = <h2>Fernando Vazquez.</h2>;
    const intro_title = <h3>I engineer things for the web.</h3>;
    const intro_body = (
        <>
            <p>
                I am a computer engineer that loves building and designing both hardware and software components. 
                Currently, I am focused on DevOps operations to deliver high quality products to clients over at{' '}
                <a href="https://www.nisum.com/" target="_blank" rel="noreferrer">
                Nisum
                </a>
                .
            </p>
        </>
    );

    const items = [greeting, name, intro_title, intro_body];

    return (
        <StyledHero>
            <TransitionGroup component={null}>
                {isMounted && items.map((item, i) => (
                    <CSSTransition key={i} classNames="fadeup" timeout={2000}>
                        <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </StyledHero>
    );
};

export default Hero;