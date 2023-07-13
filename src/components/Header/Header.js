import React from "react";
import './Header.css'
import logo from '../../images/logo.svg'
import burger from '../../images/icon__COLOR_icon-main.png'
import { Link, NavLink } from "react-router-dom";

function Header({ loggedIn, handleMenuClick }) {
  return (
    <>
      {!loggedIn ? (
        <header className="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" />
          </Link>
          <nav className="header__button-container">
            <Link to="/signup">
              <button className="header__button">Регистрация</button>
            </Link>
            <Link to="/signin">
              <button className="header__button header__button-green">
                Войти
              </button>
            </Link>
          </nav>
        </header>
      ) : (
        <header className="header">
          <div className="header__container">
            <Link to="/" className="header__logo">
              <img src={logo} alt="Логотип" />
            </Link>
            <nav className="header__button-container__films">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `header__button__films ${
                    isActive ? "header__button__films_active" : ""
                  }`
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `header__button__films ${
                    isActive ? "header__button__films_active" : ""
                  }`
                }
              >
                Сохраненные фильмы
              </NavLink>
            </nav>
          </div>
          <nav>
            <Link to="/profile" className="header__pofile__link">
              Аккаунт
            </Link>
            <button className="header__burger-button" onClick={handleMenuClick}>
              <img src={burger} alt="бургер-меню" />
            </button>
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;