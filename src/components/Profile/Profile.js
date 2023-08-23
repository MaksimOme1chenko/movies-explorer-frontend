import React from "react";
import './Profile.css'
import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useForm from '../../hooks/useForm';
import { USER_REGEX } from '../../utils/constants';

function Profile({ handleMenuClick, isOpen, onClose, loggedIn, handleUpdateUser, handleLogout }) {

  const currentUser = React.useContext(CurrentUserContext)
  const { values, errors, handleChange, isFormValid, resetForm } = useForm();
  const [isLastValues, setIsLastValues] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  React.useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }
  }, [values]);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({
      name: values.name,
      email: values.email,
    });

  }

  return (
    <section className="profile">
      <BurgerMenu isOpen={isOpen} onClose={onClose} />
      <Header handleMenuClick={handleMenuClick} loggedIn={loggedIn} />
      <div className="profile__container">
        <h3 className="profile__title">Привет, {currentUser.name}</h3>
        <form className="profile__form" name="form" id="form" onSubmit={handleSubmit} noValidate>
          <div className={`profile__input-container ${errors.name && "profile__input-container-error"}`}>
            <label className="profile__label">Имя</label>
            <input
              className={`profile__input ${errors.name && "profile__input_type-error"}`}
              type="text"
              name="name"
              value={values.name || ''}
              minLength="2"
              maxLength="40"
              onChange={handleChange}
              pattern={USER_REGEX}
              required
            />
            <span className="profile__input-error">{errors.name}</span>
          </div>
          <div className="profile__input-container">
            <label className="profile__label">Email</label>
            <input
              className={`profile__input ${errors.email && "profile__input_type-error"}`}
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email || ' '}
              required
            />
            <span className="profile__input-error">{errors.email}</span>

          </div>
          <button className="profile__button-edit" type="submit" disabled={!isFormValid || isLastValues ? true : false}>Редактировать</button>
          <button className="profile__button-exit" type="button" onClick={handleLogout}>Выйти из аккаунта</button>
        </form>
      </div>
    </section>
  );
}
export default Profile;