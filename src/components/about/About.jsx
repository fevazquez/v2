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
              web development, and devops. My curiosity in computer science and
              engineering began back in high school when I was sitting in my
              algebra class, where I was introduced to the P vs NP problem.
            </p>
            <p>
              Since then, I have had the privilege of working as a{" "}
              <a href="http://sopac-csrc.ucsd.edu/">research assistant</a>,{" "}
              <a href="https://rocketproplab.org/">
                a student lead avionics project
              </a>
              , and a <a href="https://www.nisum.com/">devops engineer</a>. My
              main focus currently is on software development to deliver the
              best customer experience over at{" "}
              <a href="https://aws.amazon.com/">Amazon AWS</a>.
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
