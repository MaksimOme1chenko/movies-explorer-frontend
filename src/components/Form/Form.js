import React from "react";
import './Form.css'
import { Link } from "react-router-dom";

function Form({ title, children, btnText, text, link, linkText, route }) {
  return (
    <div className="form__container">
      <Link to="/" className="form__logo" />
      <h3 className="form__title">{title}</h3>
      <form className="form" id="form" name="form">
        {children}
        <Link to={route}>
          <button className="form__button" type="submit">
            {btnText}
          </button>
        </Link>
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
export default Form