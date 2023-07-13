import React from "react";
import './MoviesCard.css';
import cover from '../../images/pic__COLOR_pic.png'

function MoviesCard({ isSaved, handleSaveFilm }) {
  return (
    <>
      <li className="movies-card">
        <div className="movies-card__info">
          <h3 className="movies-card__title">33 слова о дизайне</h3>
          <p className="movies-card__time">1ч 37м</p>
        </div>
        <button
          className={`movies-card__button  ${
            isSaved ? "movies-card__button-saved" : ""
          }`}
          onClick={handleSaveFilm}
          type="button"
        ></button>
        <img className="movies-card__cover" src={cover} alt="Обложка"></img>
      </li>
    </>
  );
}
export default MoviesCard;