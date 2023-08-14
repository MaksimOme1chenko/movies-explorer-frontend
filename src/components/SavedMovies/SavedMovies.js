import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import '../MoviesCardList/MoviesCardList.css'
import Footer from "../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies({ isOpen, onClose, handleMenuClick, movies, onSaveMovie, onSubmit, savedMovies, onDeleteMovie, errorMessage }) {

  function handleSubmit(values){
     onSubmit(values)
  }

  return (
    <>
      <Header loggedIn={true} handleMenuClick={handleMenuClick} />
      <BurgerMenu isOpen={isOpen} onClose={onClose} />
      <SearchForm onSubmit={handleSubmit} />
      <p className="movies__error-message">{errorMessage}</p>
      <MoviesCardList>
        {movies.map((movie) => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            savedMovies={savedMovies}
            onSaveMovie={onSaveMovie}
            isSavedFilms={true}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </MoviesCardList>
      <Footer />
    </>
  );
}
export default SavedMovies;