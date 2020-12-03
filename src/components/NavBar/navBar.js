import React from "react";
import { Link, HashRouter } from "react-router-dom";
import "../NavBar/navBar.css";

function NavBar() {
  return (
    <HashRouter>
      <div className="nav-bar-container">
        <div className="nav-bar">
          <Link to="/home" className="nav-bar-link">
            {" "}
            <h3>Home</h3>{" "}
          </Link>
          <Link to="/skills" className="nav-bar-link">
            <h3>Skills</h3>{" "}
          </Link>
          <Link to="/portfolio" className="nav-bar-link">
            <h3>Portfolio</h3>{" "}
          </Link>
          <Link to="/resume" className="nav-bar-link">
            <h3>Resume</h3>{" "}
          </Link>
          <Link to="/contact" className="nav-bar-link">
            <h3>Contact Me</h3>{" "}
          </Link>
          <Link to="/about" className="nav-bar-link">
            <h3>About Me</h3>{" "}
          </Link>
        </div>
      </div>
    </HashRouter>
  );
}
export default NavBar;
