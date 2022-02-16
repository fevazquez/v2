import React, { useState, useEffect } from "react";

import { StyledProjectsSection, StyledProject } from "./Projects.styled";

import { Icon } from "../icons";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 760) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  const projects = [
    {
      title: "Basic Computer Processing Unit",
      summary:
        "Constructed a basic pipelined CPU using Verilog that would execute basic arithmetic algorithms to support a self designed ISA",
      technologies: ["Intel Quartus Prime", "Verilog", "ModelSim"],
      img: "https://lh3.googleusercontent.com/pw/AM-JKLVWoMEvC63A546GFFlHP9qrAp_Ox52TgoV-PIxuPaqrdIucXQyrAVuYiOpnd13FMf9w7BBx_ulxXpgXT40z41q6cZDFgjlOGwf_lckk-qj5D-QyCzartWb27cs_qRV_yHXMcQcpykeAmMTn6-WWq18=w1678-h1208-no?authuser=1",
      mobile_img:
        "https://lh3.googleusercontent.com/pw/AM-JKLUbN_FYbrOycQbXxfoCI-EDr_2TfGXAI97QiAuAy7u4MOshrzCiqGGHDSdgedUuvwUHPVo-44mhO2yx5e_IkrU0Lqhst7h-AsQkhZGToCXd39c6wKb5SMGtG3QgM5nA91YojNQtjpnmkazlmfopZ4I=w1678-h1035-no?authuser=1",
      link: "https://github.com/fevazquez/Pipelined-CPU",
    },
    {
      title: "Flow Tab Manager Chrome Extension",
      summary:
        "Worked with a team to develop an open-source Chrome extension to manage tabs for productivity purposes",
      technologies: ["React", "Node.js", "Circle CI"],
      img: "https://lh3.googleusercontent.com/pw/AM-JKLXpj2xtFxs1Ctw6l8H6dnP3sPOHro1Q6D3YQzcICXU26kDNLBPZJ006nYg9TrgLiCnXzUv-pvt-GwZx8gnRJl_hWoSUt2qUPB7cHMc0v_aELrddaaxmvekTbgJLLcYcS7jo368g7SRCkI_DlwhV-Zk=w1508-h986-no?authuser=1",
      mobile_img:
        "https://lh3.googleusercontent.com/pw/AM-JKLX9XbRE6yC3xSCeLxC8t7lnj_s7JLkWksn54WZ0PvilhYkHZVWf84CtLD0zGSldYFLWr5kViI4xut5eNT_Q7mKW1EjcP5xCFvfiBy8alK49ruyU8E9mgEbwKaWpiDcVTReKx7MPAF_jrCSjbhaUQh8=w1273-h796-no?authuser=1",
      link: "https://github.com/cse112-sp20/Team-Potato",
    },
    {
      title: "Try Clubs Mobile Application",
      summary:
        "Worked with a team to develop a mobile application for finding and advertising student organizations",
      technologies: ["Java", "Android Studio", "Gradle"],
      img: "https://lh3.googleusercontent.com/pw/AM-JKLV3f_9kPjsvHvNpmRIeXqP4Wrfhikfn8eRa7PT2hq2UUeFiPkEBNP9m2m1lzB7uawuida24Ug1g6yksLPB0u7ld6xTTop6v6SGo1QTQ6b-Pwza3pKXwxHhs_obOnsbIXN12-d_DSo6I64sPJ-IKETw=w1678-h1086-no?authuser=1",
      mobile_img:
        "https://lh3.googleusercontent.com/pw/AM-JKLWA18Wu2wNu0wBy5DKT9L9Ga6iUvm0sfJKd1tq4f8X6m3DWY0tik5n1s89JV79tdWWrsw6JJ0fIGx1EQ5SmTZfdlzcNZf-cnTjCdY7wqzFkGV0dPjDsqfdSzOny0vjhTjSWTfsmLlKKX4y6WD6ujAc=w1678-h825-no?authuser=1",
      link: "https://github.com/jamesbasa/TryClubs",
    },
    // {
    //   title: "Crimes and Police Dispatch correlation",
    //   summary:
    //     "Worked with a team to explore the relationships between the percentage of minorities, number of crimes, and police dispatch and response time in Chicago",
    //   technologies: ["Jupyter Notebook", "Matplotlib", "Numpy", "Pandas"],
    //   img: "https://lh3.googleusercontent.com/76Sr4MENKHGzJQJEPe944cLkq2E33qCJmkqkPrcOCd_xj2bQEqyn_XbEppKEDy8KSXINop5_UXY6BkboOJz_dW_zVkD3FD-9TSpnMenWAdqScM2_d2Slchhnl_adJa8ynuRXOvpBoa2aeo6P7CVcJsJS539SWXh6fHrTtyh1euzH2j7Euy9xH2H0-pP-aTC6JjDnK5dBCJGVYqNefWHZuZ0Jm1W7TOj4fWJMFSqDDgiQAhrz8fykuWciKkaOFo4ThgD0C8SJtShVpC4d2oya0I8BVOv2iIIpLhBaGHC_ymMWa1FVfit2YNl2hOOoIfj865-_7wX6gUch6dxv9DrseZMGY9lWSGb1Wq_VrrnPuiPVWnNmrUWTH_WFicFRPaGm0D24_HXoMDTp7sGSaGz8nix_ZY8vgscFWAhofcQI7DX4-H4zjzKsxW6_7gmg2XLyXyLFgf_Bm2IL4og5qD7bsb7NRoLyR4NZEePITUjRcrq8cW6eI0W_h3fZdQP78w1nGdQg9tOWepX5PTAtOfARUgksUyVaHZdNkb3rBEu58VnBaMiVrvouoKTNJFt3nN4RoHJaoBB1qHUO3aVgMgtu5ZgQwzusCbwj8TH9Ycifv7d9VL5tsCPd2DRCNNZ1sh_YpxYEEz1TlZXGrKQ7fLxnt--Oh7UtDGyrSb0f4fxfKoAZ2zIMI5iVK49w84y7PfMkbKn5kOsnU5rkyczqQNBeKw=w1432-h1282-no?authuser=2",
    //   link: "https://github.com/fevazquez/dispatch-correlation/blob/master/FinalProject%20.ipynb",
    // },
    // {
    //   title: "Machine Learning - Convoluted Neural Networks",
    //   summary:
    //     "Worked with a team to explore the relationships between the percentage of minorities, number of crimes, and police dispatch and response time in Chicago",
    //   technologies: ["Pytorch", "Numpy", "Google Colab"],
    //   img: "https://lh3.googleusercontent.com/rned8A-uCfKBIMjwr0jXy5APaYaCpgtxFu_5EmztWY_f1k9qpfM3gkAKtvKenNOi_vMnIoLI9A8DwrctEDNpR53L6siwX9zqsabRTk380ktHWRzNf9miC1S5AjijFKEZPGLniPSxAH5V4-6u_r8YWBac22FUhZsuWzJsxR1sDLqPMQL_xrNKDYfWj_RGN4yeNhQeOX4Bt_Op3_xAWXze2nQIeof9bFKgW6hZk9WeFqARPjxlnyowgBew5FRrSVNNBBz7QluJX_5vcgl6zUpgrPo2bEWaag3KnFN7NtP9vrPa9Fn-rQFvo1B3CNMjL_gY67rgvJYFj0Wh7OtgVowJSAeSJ57UhPIHd7sj0LJef0c2fF2Uh2FHWdg56b8uswngSOHUwRzoBsLoyMbTMsSjIfp_DvpNL9n78LPYZHZ1MMCSTLlswsrE9GbR54QKnZ79ESYE9HFwkOCio38p0z4twsBZX_MuR5qpLdCQHUL3JiUSGtNmv1ILTb363dVgBB3rPFCOOm417yW7nMxUgJPicadpjLc-cFtA4mav6C0gA2LCZe3UQsjE2eKapyBgb0BouN0ojVWY4mQj3Z8Lrs73UKUmcFGdPj3RWIK_B81AB63oPYEoXt6QJ6FTvIjGcXnHN7GEncWmYIYe7jTiMeQpukUy7Bjc1-f7JQFQE0IhIw0y3yQtFEXRyyMDIGML97MVmiIy136ZMfUW7J7Itv8VlA=w1185-h926-no?authuser=2",
    //   link: "https://colab.research.google.com/drive/12ghS-lpvIXCMi_6rnVBA3ZUlIEcjrH6Y?usp=sharing",
    // },
  ];

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
      {/* <Link to="/projects" className="bigButton">
        Additonal Projects
      </Link> */}
    </StyledProjectsSection>
  );
};

export default Projects;
