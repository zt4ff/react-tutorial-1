import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

export const CardItem = ({ src, path, label, text }) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__figure-wrap" data-category={label}>
            <img alt="Travel" className="cards__item__img" src={src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};
