import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import '../MoviesCardList/MoviesCardList.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

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
  savedMovies
}) {
  const [cardsCount, setCardsCount] = React.useState(12);
  const [widthSize, setWidthSize] = React.useState(0);
  const [cardsCountScale, setCardsCountScale] = React.useState(3);


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
      setCardsCount(12);
      setCardsCountScale(3);

      return;
    }

    if (widthSize <= 1000) {
      setCardsCount(8);
      setCardsCountScale(2);
    }

    if (widthSize <= 560) {
      setCardsCount(5);

      return;
    }
  }, [widthSize, isLoading]);

  const handleButtonClick = () => {
    setCardsCount(cardsCount + cardsCountScale);
  };

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <>
      <Header loggedIn={true} handleMenuClick={handleMenuClick} />
      <section className="movies">
        <BurgerMenu isOpen={isOpen} onClose={onClose} />
        <SearchForm onSubmit={handleSubmit} />
        <p className="movies__error-message">{errorMessage}</p>
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList>
            {movies.slice(0, cardsCount).map((movie) => (
              <MoviesCard
                key={movie.id}
                movies={movies}
                movie={movie}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
                savedMovies={savedMovies}
                isSavedFilms={false}
              />
            ))}
          </MoviesCardList>
        )}
        {cardsCount >= movies.length || isLoading ? (
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