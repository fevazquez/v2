import React from "react";

import selfImage from "../../img/self.jpg";
import { StyledAboutSection, StyledText, StyledPic } from "./About.styled";
const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "Jenkins",
  ];
  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledPic>
          <div className="wrapper">
            <picture className="img">
              <source type="image/avif" srcSet={selfImage} />
              <img src={selfImage} alt="yours truly" />
            </picture>
          </div>
        </StyledPic>
        <StyledText>
          <div>
            <p>
              Hello! My name is Fernando and I am a 2021 UC San Diego computer
              engineering graduate who is highly interested in machine learning,
              web development, and printed circuit board designing. My curiosity
              in computer science and engineering began back in high school when
              I was sitting in my algebra class, when I was introduced to the P
              vs NP problem.
            </p>
            <p>
              Since then, I have had the privilege of working as a{" "}
              <a href="http://sopac-csrc.ucsd.edu/">research assistant</a>,{" "}
              <a href="https://rocketproplab.org/">
                a student lead avionics project
              </a>
              , and{" "}
              <a href="https://rocketproplab.org/">
                a leading global digital commerce firm
              </a>
              . My main focus currently is on DevOps operations to deliver high
              quality products at <a href="https://www.nisum.com/">Nisum</a> for
              clients.
            </p>
            <p>
              Here are some of the technologies I've been working with recently:
            </p>
          </div>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
