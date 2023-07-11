import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'

function MoviesCardList({ isSaved, handleSaveFilm }) {
    return(
        <section className="movies-card-list">
            <ul className="movies-card-list__cards">
              <MoviesCard key="1" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="2" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="3" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="4" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="5" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="6" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="7" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="8" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="9" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="10" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="11" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
              <MoviesCard key="12" isSaved={isSaved} handleSaveFilm={handleSaveFilm}/>
            </ul>
            <button className="movies-card-list__button" type="button">Еще</button>
        </section>
    )
}
export default MoviesCardList