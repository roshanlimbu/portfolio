import React from "react";

const ProjectItem = (props) => {
  return (
    <div className="projectItem">
      <div
        style={{ backgroundColor: `url(${props.image})` }}
        className="bgImage"
      />
      <h1>{props.name}</h1>
    </div>
  );
};

export default ProjectItem;
