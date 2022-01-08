import React from "react";

import { StyledProjectsSection, StyledProject } from "./Projects.styled";

import SlideShow from "./SlideShow";
import temp from "../../img/cpu.PNG";
import { Icon } from "../icons";
const Projects = () => {
  const projects = [
    {
      title: "Basic Computer Processing Unit",
      summary:
        "Constructed a basic pipelined CPU using Verilog that would execute basic arithmetic algorithms to support a self designed ISA",
      technologies: ["Intel Quartus Prime", "Verilog", "ModelSim"],
      img: "../../img/cpu.PNG",
      link: "https://github.com/fevazquez/Pipelined-CPU",
    },
    {
      title: "Tab Manager Chrome Extension",
      summary:
        "Worked with a team to develop an open-source Chrome extension to manage tabs for productivity purposes",
      technologies: ["React", "Node.js", "Circle CI"],
      img: "",
      link: "https://github.com/cse112-sp20/Team-Potato",
    },
    {
      title: "Try Clubs Mobile Application",
      summary:
        "Worked with a team to develop a mobile application for finding and advertising student organizations",
      technologies: ["React", "Node.js"],
      img: "",
      link: "https://github.com/jamesbasa/TryClubs",
    },
    {
      title: "Crimes and Police Dispatch correlation",
      summary:
        "Worked with a team to explore the relationships between the percentage of minorities, number of crimes, and police dispatch and response time in Chicago",
      technologies: ["Jupyter Notebook", "Matplotlib", "Numpy", "Pandas"],
      img: "",
      link: "https://github.com/fevazquez/dispatch-correlation/blob/master/FinalProject%20.ipynb",
    },
    {
      title: "Machine Learning - Convoluted Neural Networks",
      summary: "Used Multi-layered Perceptron",
      technologies: ["Pytorch", "Numpy", "Google Colab"],
      img: "",
      link: "https://colab.research.google.com/drive/12ghS-lpvIXCMi_6rnVBA3ZUlIEcjrH6Y?usp=sharing",
    },
  ];
  return (
    <StyledProjectsSection id="projects">
      <h2 className="numbered-heading">Projects I've Worked On</h2>
      {projects &&
        projects.map((project, idx) => {
          return (
            <StyledProject
              key={idx}
              // ref={(el) => (projects.current[idx] = el)}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{ __html: project.summary }}
                />
                {project.technologies.length && (
                  <ul className="project-tech-list">
                    {project.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="project-links">
                <a href={project.link}>
                  <Icon name="GitHub" />
                </a>
              </div>
              <div className="project-image">
                <div className="wrapper">
                  <picture className="img">
                    <source type="image/avif" srcSet={project.img} />
                    <img src={temp} alt="yours truly" />
                  </picture>
                </div>
              </div>
            </StyledProject>
          );
        })}
    </StyledProjectsSection>
  );
};

export default Projects;
