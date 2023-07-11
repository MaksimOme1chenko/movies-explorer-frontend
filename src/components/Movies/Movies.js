import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ handleMenuClick, isOpen, onClose }) {
  function handleSaveFilm(event) {
    event.target.classList.toggle("movies-card__button_active");
  }

  return (
    <>
      <Header loggedIn={true} handleMenuClick={handleMenuClick} />
      <section className="movies">
        <BurgerMenu isOpen={isOpen} onClose={onClose} />
        <SearchForm />
        <MoviesCardList handleSaveFilm={handleSaveFilm} />
      </section>
      <Footer />
    </>
  );
}
export default Movies