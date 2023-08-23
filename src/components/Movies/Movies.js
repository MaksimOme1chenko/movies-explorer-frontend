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
import {
  DESKTOP,
  TABLET,
  MOBILE,
  DESKTOP_CARDS,
  TABLET_CARDS,
  MOBILE_CARDS,
  MORE_DESKTOP_CARDS,
  MORE_TABLET_CARDS,
  MORE_MOBILE_CARDS,
} from "../../utils/constants";

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
  handleSearch,
  loggedIn
}) {
  const [moviesCardsCount, setMoviesCardsCount] = React.useState(12);
  const [widthSize, setWidthSize] = React.useState(0);
  const [moviesCardsCountScale, setMoviesCardsCountScale] = React.useState(3);
  // const [moviesRequest, setMoviesRequest] = React.useState('')
  // const [isCheckBoxChecked, setIsCheckBoxChecked] = React.useState(false);

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
    if (widthSize > DESKTOP) {
      setMoviesCardsCount(DESKTOP_CARDS);
      setMoviesCardsCountScale(MORE_DESKTOP_CARDS);

      return;
    }

    if (widthSize <= TABLET) {
      setMoviesCardsCount(TABLET_CARDS);
      setMoviesCardsCountScale(MORE_TABLET_CARDS);
    }

    if (widthSize <= MOBILE) {
      setMoviesCardsCount(MOBILE_CARDS);
      setMoviesCardsCountScale(MORE_MOBILE_CARDS);
      return;
    }
  }, [widthSize, isLoading]);

  function handleButtonClick() {
    setMoviesCardsCount(moviesCardsCount + moviesCardsCountScale);
  };


  return (
    <>
      <Header loggedIn={loggedIn} handleMenuClick={handleMenuClick} />
      <section className="movies">
        <BurgerMenu isOpen={isOpen} onClose={onClose}/>
        <SearchForm onSubmit={onSubmit} handleSearch={handleSearch}/>
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