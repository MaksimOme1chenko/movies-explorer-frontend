import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard({ onSaveMovie, onDeleteMovie, movie, savedMovies, isSaved, isSavedFilms, buttonType  }) {

  function durationConverter(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  const { pathname } = useLocation();
  const moviePath = pathname === '/movies';

  const [isMovieSaved, setIsMovieSaved] = React.useState(isSaved ? true : false);
  const [movieIdForDelete, setMovieIdForDelete] = React.useState('');

  const onClickOnMoviePath = isMovieSaved ? handleDeleteMovie : handleSaveMovie;


  function handleSaveMovie() {
    onSaveMovie(movie);
    setIsMovieSaved(true);
  }

  function handleDeleteMovie() {
    onDeleteMovie(movieIdForDelete || movie._id);
    setIsMovieSaved(false);
  }

  React.useEffect(() => {
    const savedFilm = savedMovies && savedMovies.find((savedFilm) => savedFilm?.movieId === movie.id);
    setMovieIdForDelete(savedFilm?._id);
  }, [savedMovies, movie.id]);

  return (
    <>
      <li className="movies-card">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{movie.nameRU}</h3>
          <p className="movies-card__time">{durationConverter(movie.duration)}</p>
        </div>
        <button
        className={`movies-card__button movies-card__button-${buttonType}  
          ${isMovieSaved ? 'movies-card__button_active movies-card__button' : ''}`}
        type='button'
        onClick={moviePath ? onClickOnMoviePath : handleDeleteMovie}
      ></button>
        <a href={movie.trailerLink} target="_black" rel="noreferrer">
         <img className="movies-card__cover" src={isSavedFilms ? movie.image :`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU}></img> 
        </a>
      </li>
    </>
  );
}
export default MoviesCard;