import React from "react";
import "../Portfolio/portfolio.css";
import projects from "../Data/projects.json";
function Portfolio() {
  return (
    <div className="project-container">
      {projects.map((project, index) => {
        let site = project.website;
        return (
          <div key={index} className="project-elements">
            <h1>{project.title}</h1>
            <h2>{project.descripton}</h2>
            <a href={project.website} target="_blank">
              {project.website}
            </a>
            <div className="project-images">
              <img src={project.img1} />
              <img src={project.img2} />
              {project.img3 ? <img src={project.img3} /> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
