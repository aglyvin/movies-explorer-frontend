import "./MoviesCard.css";
import { Link } from "react-router-dom";
import React from "react";

export function MoviesCard(props) {
  return (
    <li className="movie">
      <Link
        className="movie__img-link"
        to={{ pathname: `${props.trailer}` }}
        target="_blank"
      >
        <img className="movie__img" src={props.image} alt="постер фильма" />
      </Link>
      <div className="movie__title-wrapper">
        <h2 className="movie__title">{props.nameRU}</h2>
        <button
          className=""
          type="button"
        ></button>
      </div>
      <p className="movie__duration">{props.duration}</p>
    </li>
  );
}
