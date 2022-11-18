import React from "react";

const Card = () => {
  const item = {
    heading: "spotify-clone",
  };
  return (
    <div className="cards-container">
      <div className="img-contaienr"></div>
      <h2 className="card-heading">{item.heading}</h2>
      <button type="sumbit">Learn more</button>
    </div>
  );
};

export default Card;
