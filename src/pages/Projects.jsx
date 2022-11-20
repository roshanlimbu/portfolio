import React from "react";
import ProjectItem from "../components/ProjectItem";
const Projects = () => {
  return (
    <div className="porjects">
      <h1>My personal projects</h1>
      <div className="projectList">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Projects;
