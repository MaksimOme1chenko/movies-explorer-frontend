import React from "react";
import './SearchForm.css'
import search from '../../images/search.svg'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit }) {

  const [ values, setValues ] = React.useState({words: '', isShortMovie: false});


  function handleChange(e) {
    setValues({...values, words: e.target.value});
  };

  function handleSubmit(e) {
    e.preventDefault();
    
    onSubmit(values);
  };
  
  function handleClickSwitch(e) {
    setValues({...values, isShortMovie: e.target.checked});
  };

  return (
    <section className="search">
      <form className="search__from" onSubmit={handleSubmit}>
        <div className="search__input-container">
          <img className="search__image" src={search} alt="Поиск"></img>
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            id="film-input"
            defaultValue={values.words}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="search__container">
          <button className="search__button"></button>
          <div className="search__checkbox-container">
            <FilterCheckbox onClickSwitch={handleClickSwitch}/>
          </div>
        </div>
      </form>
      <div className="search__checkbox-mobile">
        <FilterCheckbox onClickSwitch={handleClickSwitch}/>
      </div>
    </section>
  );
}
export default SearchForm;