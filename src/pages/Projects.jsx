import React from "react";
import ProjectItem from "../components/ProjectItem";
import proj1 from "../Assets/proj1.jpg";
import proj2 from "../Assets/proj2.jpg";
// import proj3 from "../Assets/proj3.webp";
// import proj4 from "../Assets/proj4.webp";
// import proj5 from "../Assets/proj5.jpg";
// import proj6 from "../Assets/proj6.png";
import "../styles/Project.css";
const Projects = () => {
  return (
    <div className="porjects">
      <h1>My personal projects</h1>
      <div className="projectList">
        <ProjectItem name="Social Media Website" image={proj1} />
        <ProjectItem name="Spotify Clone" image={proj2} />
      </div>
    </div>
  );
};

export default Projects;
