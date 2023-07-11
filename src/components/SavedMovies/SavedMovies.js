import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function SavedMovies({ isOpen, onClose, handleMenuClick }) {
  return (
    <>
      <Header loggedIn={true} handleMenuClick={handleMenuClick} />
      <BurgerMenu isOpen={isOpen} onClose={onClose} />
      <SearchForm />
      <MoviesCardList isSaved={true} />
      <Footer />
    </>
  );
}
export default SavedMovies;