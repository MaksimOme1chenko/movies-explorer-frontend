import React from "react";
import './MoviesCard.css';

function MoviesCard({ onSaveMovie, onDeleteMovie, movie, savedMovies, isSavedFilms  }) {

  function durationConverter(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }


  const defaultSaved = savedMovies.filter((m) => m.movieId === movie.id).length > 0;
  const [isSaved, setSaved] = React.useState(defaultSaved);


  function handleSaveMovie(){
    if (isSaved) {
      onDeleteMovie(movie, setSaved);
    } else {
      onSaveMovie(movie, isSaved, setSaved);
    }
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  React.useEffect(() => {
    if (movie) {
      if (movie._id) {
        setSaved(true);
      } else {
        setSaved(false);
      }
    }
  }, [movie]);


  return (
    <>
      <li className="movies-card">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{movie.nameRU}</h3>
          <p className="movies-card__time">{durationConverter(movie.duration)}</p>
        </div>
        {isSavedFilms ? (
          <button
            type="button"
            className="movies-card__button movies-card__button-saved"
            onClick={handleDeleteMovie}>
          </button>
        ) : (
          <button
            type="button"
            className={`${isSaved ? 'movies-card__button movies-card__button_active' : 'movies-card__button'}`}
            onClick={handleSaveMovie} >
          </button>
        )}
        <a href={movie.trailer} target="_black" rel="noreferrer">
         <img className="movies-card__cover" src={isSavedFilms ? movie.image :`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU}></img> 
        </a>
      </li>
    </>
  );
}
export default MoviesCard;