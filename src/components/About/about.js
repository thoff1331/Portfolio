import React from "react";
import "../About/about.css";
import photo from "../../photos/trev.JPG";

function About() {
  return (
    <div className="about-container">
      <div className="about-elements">
        <img src={photo} />
        <p>
          I am passionate about learning new things and having a positive impact
          on people’s lives. Software Engineering has been the perfect avenue to
          continue two of my life long goals. I graduated from the University of
          Missouri in 2016 with a bachelor’s degree in Sports Business
          Management. Since College I have been working in Technology and it is
          truly of my biggest passions. Outside of code, I enjoy playing golf
          and being in the gym daily.​
        </p>
      </div>
    </div>
  );
}
export default About;
