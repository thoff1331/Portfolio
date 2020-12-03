import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Portfolio from "./components/Portfolio/portfolio";
import Resume from "./components/Resume/resume";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import About from "./components/About/about";
export default (
  <Switch>
    <Route path="/skills" component={Skills} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route exact path="/home" component={Home} />
  </Switch>
);
