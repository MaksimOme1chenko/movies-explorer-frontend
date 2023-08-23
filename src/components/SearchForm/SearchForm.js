import React from "react";
import { useLocation } from "react-router-dom";
import './SearchForm.css'
import search from '../../images/search.svg'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit }) {
  
  const [ values, setValues ] = React.useState({words: '', isShortMovie: false});
  const [ errorText, setErrorText ] = React.useState('');
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === '/movies' && localStorage.getItem('movieSearch')) {
      const localQuery = localStorage.getItem('movieSearch');
      setValues({words: localQuery});
      console.log(localQuery)
    }
  }, [pathname]);


  function handleChange(e) {
    setValues({...values, words: e.target.value});
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (values.words.length === 0) {
      setErrorText('Нужно ввести ключевое слово')
    } else {
      setErrorText('')
      onSubmit(values);
    }
  };
  
  function handleClickSwitch(e) {
    setValues({...values, isShortMovie: e.target.checked});
  };

  return (
    <section className="search">
      <form className="search__from" onSubmit={handleSubmit} noValidate>
        <div className="search__input-container">
          <img className="search__image" src={search} alt="Поиск"></img>
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            id="film-input"
            value={values.words || ''}
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
      <span className="search__form-error">{errorText}</span>
    </section>
  );
}
export default SearchForm;
