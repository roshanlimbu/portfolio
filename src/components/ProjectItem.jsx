import React from "react";

const ProjectItem = ({ name, image }) => {
  return (
    <div className="projectItem">
      <div style={{ backgroundColor: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
