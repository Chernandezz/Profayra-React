import React from "react";
import "./Card.css";

const Card = ({ link, img, alt, titulo, tecnologias }) => {
  return (
    <li className="card">
      <a href={link} className="card__link" target="_blank">
        <div className="card__image-container">
          <img src={img} className="card__image" alt={alt} />
        </div>
        <div className="card__content">
          <h3 className="card__title">{titulo}</h3>
          <p className="card__technologies">{tecnologias.join(" • ")}</p>
        </div>
      </a>
    </li>
  );
};

export default Card;
