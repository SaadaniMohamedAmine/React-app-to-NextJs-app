import React from "react";

const Card = ({card}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">
        {card.description}
        </p>
        <a href="#" className="btn btn-dark">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
