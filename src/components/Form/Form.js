import React from "react";
import './Form.css'
import { Link } from "react-router-dom";


function Form({
  title,
  children,
  btnText,
  text,
  link,
  linkText,
  handleSubmit,
  isDisabled, 
  error
}) {
  return (
    <div className="form__container">
      <Link to="/" className="form__logo" />
      <h3 className="form__title">{title}</h3>
      <form className="form" id="form" name="form" onSubmit={handleSubmit}>
        {children}
        <p className="form__error">{error}</p>
        <button className={isDisabled ? 'form__button form__button_inactive' : 'form__button'} 
        type="submit" 
        disabled={isDisabled ? true : false}>
          {btnText}
        </button>
      </form>
      <p className="form__text">
        {text}
        <Link to={link} className="form__link">
          {linkText}
        </Link>
      </p>
    </div>
  );
}
export default Form;