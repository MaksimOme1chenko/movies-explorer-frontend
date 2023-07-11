import React from "react";
import './BurgerMenu.css'
import { Link, NavLink } from "react-router-dom";

function BurgerMenu({ isOpen, onClose }) {
  return (
    <div className={`burger-menu ${isOpen ? "burger-menu_opened" : ""}`}>
      <ul className="burger-menu__list">
        <button
          className="burger-menu__button-close"
          onClick={onClose}
        ></button>
        <li className="burger-menu__list-item">
          <NavLink
            className={({ isActive }) =>
              `burger-menu__link ${isActive ? "burger-menu__link_active" : ""}`
            }
            to="/"
            onClick={onClose}
          >
            Главная
          </NavLink>
        </li>
        <li className="burger-menu__list-item">
          <NavLink
            className={({ isActive }) =>
              `burger-menu__link ${isActive ? "burger-menu__link_active" : ""}`
            }
            to="/movies"
            onClick={onClose}
          >
            Фильмы
          </NavLink>
        </li>
        <li className="burger-menu__list-item burger-menu__link_margin">
          <NavLink
            className={({ isActive }) =>
              `burger-menu__link ${isActive ? "burger-menu__link_active" : ""}`
            }
            to="/saved-movies"
            onClick={onClose}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="burger-menu__list-item burger-menu__list-item_profile">
          <Link
            className="burger-menu__link-profile"
            to="/profile"
            onClick={onClose}
          >
            Аккаунт
          </Link>
        </li>
      </ul>
    </div>
  );
}
  
  export default BurgerMenu;