import React from "react";

import { StyledProjectsSection, StyledProject } from "./Projects.styled";
import { projects } from "../../config";
import { Icon } from "../icons";

const Projects = () => {
  return (
    <StyledProjectsSection id="projects">
      <h2 className="numbered-heading">Projects I've Worked On</h2>
      {projects &&
        projects.map((project, idx) => {
          return (
            <StyledProject key={idx}>
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
                <div className="project-links">
                  <a href={project.link}>
                    <Icon name="GitHub" />
                  </a>
                </div>
              </div>

              <div className="project-image">
                <picture className="img">
                  <source type="image/avif" srcSet={project.mobile_img} />
                  <img src={project.mobile_img} alt={project.title} />
                </picture>
              </div>
            </StyledProject>
          );
        })}
    </StyledProjectsSection>
  );
};

export default Projects;
