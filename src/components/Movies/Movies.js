import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import '../MoviesCardList/MoviesCardList.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";

function Movies({
  handleMenuClick,
  isOpen,
  onClose,
  movies,
  onSubmit,
  isLoading,
  onSaveMovie,
  errorMessage,
  onDeleteMovie,
  savedMovies,
  loggedIn
}) {
  const [moviesCardsCount, setMoviesCardsCount] = React.useState(12);
  const [widthSize, setWidthSize] = React.useState(0);
  const [moviesCardsCountScale, setMoviesCardsCountScale] = React.useState(3);

  const { pathname } = useLocation()


  React.useEffect(() => {
    const handleWidthChange = () => {
      setTimeout(() => {
        setWidthSize(window.innerWidth);
      }, 5000);
    };

    setWidthSize(window.innerWidth);

    window.addEventListener("resize", handleWidthChange);

    return () => window.removeEventListener("resize", handleWidthChange);
  }, []);

  React.useEffect(() => {
    if (widthSize > 1000) {
      setMoviesCardsCount(12);
      setMoviesCardsCountScale(3);

      return;
    }

    if (widthSize <= 1000) {
      setMoviesCardsCount(8);
      setMoviesCardsCountScale(2);
    }

    if (widthSize <= 560) {
      setMoviesCardsCount(5);

      return;
    }
  }, [widthSize, isLoading]);

  function handleButtonClick() {
    setMoviesCardsCount(moviesCardsCount + moviesCardsCountScale);
  };

  function handleSubmit(values) {


    onSubmit(values);
  };

  return (
    <>
      <Header loggedIn={loggedIn} handleMenuClick={handleMenuClick} />
      <section className="movies">
        <BurgerMenu isOpen={isOpen} onClose={onClose} />
        <SearchForm onSubmit={handleSubmit} />
        <p className="movies__error-message">{errorMessage}</p>
        {isLoading ? (
          <Preloader />
        ) : ( 
          <MoviesCardList>
            {movies.slice(0, moviesCardsCount).map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
                savedMovies={savedMovies}
                isSavedFilms={false}
                isSaved={pathname === '/movies' ? savedMovies.some((savedMovie) => savedMovie.movieId === movie.id) : false}
              />
            ))}
          </MoviesCardList>
        )}
        {moviesCardsCount >= movies.length || isLoading ? (
          ""
        ) : (
          <button
            className="movies-card-list__button"
            onClick={handleButtonClick}
          >
            Ещё
          </button>
        )}
      </section>
      <Footer />
    </>
  );
}
export default Movies