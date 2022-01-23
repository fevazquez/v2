import React from "react";

import { StyledProjectsSection, StyledProject } from "./Projects.styled";

import SlideShow from "./SlideShow";

import { Icon } from "../icons";
const Projects = () => {
  const projects = [
    {
      title: "Basic Computer Processing Unit",
      summary:
        "Constructed a basic pipelined CPU using Verilog that would execute basic arithmetic algorithms to support a self designed ISA",
      technologies: ["Intel Quartus Prime", "Verilog", "ModelSim"],
      img: "https://lh3.googleusercontent.com/GCV2QR33j_pOIqt_yM_GR98CxU2aGC1YlVL8FapAUsXIXBmHaHgtDaMvyEyEYFZ3d31P73Ycxd_e5h5ls2pXKEUllU3wKdrcKwRjMJZyfjPqjlsrhwrgArngMXOibr7jY-pSJ8ff_y9IR_50SVZrFBxdwoWGG0n8hIBJFvC1-O1i3NnfSw4p93B2YQWmU8YLbn55PfIqPAJ-Ii7orLac1f0Y26ZSnZ9tNip2UmN53RMhiySkBd7ES2MBtlG2p7Nw75EuQDrRmlj6dN4MF4iJV_oKatZINdG0RrgWyei5jprXGsj_F2ddLR9_UHu0pl7Z0uLiJmQS3homxKo90p5lNTlXdglKWLe8VHZPWoXIiSF4jlISQBV6JGwTSPPJ5i4D8mjaf7SxnvRE4qs9Cw_q1qPL1pWlF0a-xN03j3H7nFrl7NTNHdxmpsHX_b06ioWPq_V6A0Ru0pe5Y1jjAYpBRdILOaSjEHjEOPCIV6I0LNqsYbcVn-XXcTSN9bgB6LZPAEECKUbjw5U6EMd0bhYufRYczeR2CGppaT2Bht6EopRrLtSiZveBXwbEPRjqFMTO7mIebeON8uI_u5jP2RDsssHeuj6cKFELpaCpfX_QO-fkokDnEFxK5lxVLC3dhK_wHesJKlKzXgijWMaGSLPbW2Z-NE2umQbXqqPKClj09opcBnfSGitwVx9-6WFH6bQiWQeyokN65oWJ6EMmS5n68A=w1725-h1241-no?authuser=2",
      link: "https://github.com/fevazquez/Pipelined-CPU",
    },
    {
      title: "Flow Tab Manager Chrome Extension",
      summary:
        "Worked with a team to develop an open-source Chrome extension to manage tabs for productivity purposes",
      technologies: ["React", "Node.js", "Circle CI"],
      img: "https://lh3.googleusercontent.com/oL4EMU84WwjJKLrJapfPnDg1hmMnjC7aA-BekFGV66uwYN4NNJw_16UmREY1vmPsxPbMRu3jNWhZwTsvBzYGnXDF38K3PwLScm9c10hx_BuNQX7IdzRjJEVndKnvP8HllqgdMzCW0dfUDl9Let2QZtCvdHrVqe96mBQ6BksEqOhWy_gWAyQJB1WGsLdJyLfD6Rk1SbuE6pcKbS0uzcLJUij3ELItyFTkumDaqxWg8oP8-R71BZ3mPuzZ_bNrDHIaXqwE7gCltvOKZMKTv1ZkwO2I5JxD2_24t9k7TCjkStEVsn-JPBQGwkhGtmcfI9qEPT7ZPbQ6yOe7Qoz6-y-OezTQ9G2ccNLM6dsln-ng7jo7eQkqHJzwBAxT4XnstlMeuy55joEO3dpATPN-sBpE6p7qghxsCTFkxkTv_mxuzmBT_Af0FELnqC7JG5LapOsNMEYrRPWoZmuJ2lyZ73k5sAZgHAUtSbx6vh_dJEoejoTraoho2HNVCfvPm8WKIPOxMFGf0W3I1ZD3lbpHzTJIiPmwim-xUldFyriYQKbDtS5Af3nER6VA1g28IJIqxYJ1xG61eFwick0DodqiidY53Y9JNHAw1J7gGKg8WH8wNbqfHv8BMnEHXT6ffBo_lNQ1KqvviRZgh4Yzd08iL7FBqW22ocBkOO5FRw2gOv8kE3CG_XN-z3S7IjrETlOED3ZSzFmlgbkSd2RSNMB_SOjseg=w1508-h986-no?authuser=2",
      link: "https://github.com/cse112-sp20/Team-Potato",
    },
    {
      title: "Try Clubs Mobile Application",
      summary:
        "Worked with a team to develop a mobile application for finding and advertising student organizations",
      technologies: ["Java", "Android Studio", "Gradle"],
      img: "https://lh3.googleusercontent.com/7Mn1Tpiys8h5tCeZ9MRDyroIgI0h7fgXDTRtIEvWWpf7__cJAdXuf-Iyc3yEmWbKmtPcQdtQelk3arbqYuylywADUgHHwpmL8tU3MRaMwN00R4XtZqUJPaFtembQ38kP3ucwCOSieB6ZFsOgj-3Z1SGMpvsfK5LtUbX3arywfn0xX_DSfmeOb_IHyj-7_Vvv33RAlaYEEKN0c9G-ry9hq55kI59a5pgLJ8QO4__XDCDjsIDDgaeX6cclsHI_tFngs2vu_G72fgvn0xCzlbCecTMuSHblXO3ZUrP8ww-EsEJXovDLYuX-UMay1KfWTVRvceGKt6PKvqQS20PfbkTk_uXk_SSxNYc8P1y1nM0A7X8kfIMPjxFyH9NmnT80zrFHWKP-DLmI6g07wHd58jLUugme1uj-LHZvwHF60pONrWFqA1UVuhvPpKrkkq3QrvQeP3GfSOB0aNZen7Ss3PpR3kax9g9wplRRvZB06RgyGdCUZm9GXASCJfCl1vpxFdDVK3hm5KfuzoluLdIyNtaRdF0lJznMI7DytOPeV6BFpfJQSlQ_viPUljNBlNwoV8BXbtHc3apUjlNMzW0AwNS_4C6TBcH5NnpwWDI7m5MYSS7IX96JNQWfTvXSB1BZBrmVSbUI4JkKV2cOI7NQyCIib9pRCjWR-eiAIwLzbvPf1ZmyBvN0_7ad5poIo6Ih9fN6V1v6ivCwFCMXTNMbqj1X0g=w1941-h1256-no?authuser=2",
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
                  <source type="image/avif" srcSet={project.img} />
                  <img src={project.img} alt={project.title} />
                </picture>
              </div>
            </StyledProject>
          );
        })}
    </StyledProjectsSection>
  );
};

export default Projects;
