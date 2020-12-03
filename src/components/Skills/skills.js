import React from "react";
import "../Skills/skills.css";
import skills from "../Data/logos.json";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-elements">
        {skills.map((skill, index) => {
          return (
            <div className="image-with-label" key={index}>
              <label>{skill.label}</label>
              <img src={skill.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Skills;
