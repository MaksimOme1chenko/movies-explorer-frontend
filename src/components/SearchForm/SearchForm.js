import React from "react";
import './SearchForm.css'
import search from '../../images/search.svg'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__from">
        <div className="search__input-container">
          <img className="search__image" src={search} alt="Поиск"></img>
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            id="film-input"
            required
          ></input>
        </div>
        <div className="search__container">
          <button className="search__button"></button>
          <div className="search__checkbox-container">
            <FilterCheckbox />
          </div>
        </div>
      </form>
      <div className="search__checkbox-mobile">
        <FilterCheckbox />
      </div>
    </section>
  );
}
export default SearchForm;