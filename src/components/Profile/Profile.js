import React from "react";
import './Profile.css'
import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Profile({ handleMenuClick, isOpen, onClose }) {
  return (
    <section className="profile">
      <BurgerMenu isOpen={isOpen} onClose={onClose} />
      <Header handleMenuClick={handleMenuClick} loggedIn={true} />
      <div className="profile__container">
        <h3 className="profile__title">Привет, Максим!</h3>
        <form className="profile__form">
          <div className="profile__input-container">
            <label className="profile__label">Имя</label>
            <input
              className="profile__input"
              type="text"
              minLength="2"
              maxLength="40"
              defaultValue="Максим"
              required
            />
          </div>
          <div className="profile__input-container">
            <label className="profile__label">Email</label>
            <input
              className="profile__input"
              type="email"
              defaultValue="omelchenk0.m89@yandex.ru"
              required
            />
          </div>
          <button className="profile__button-edit">Редактировать</button>
          <button className="profile__button-exit">Выйти из аккаунта</button>
        </form>
      </div>
    </section>
  );
}
export default Profile;