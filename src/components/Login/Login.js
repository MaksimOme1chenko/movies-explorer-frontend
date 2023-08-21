import React from "react";
import Form from "../Form/Form";
import  "../Form/Form.css";
import useForm from '../../hooks/useForm';
import { emailRegex } from '../../utils/constants';

function Login({ onLogin, error }) {

  const { values, errors, handleChange, isFormValid } = useForm();
  
  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-lone-blocks
    {onLogin({
      email: values.email,
      password: values.password,
    })};
  }
  return (
    <Form
      title="Рады видеть!"
      btnText="Войти"
      text="Еще не зарегестрированы?"
      link={"/signup"}
      linkText="Регистрация"
      handleSubmit={handleSubmit}
      isDisabled={!isFormValid}
      error={error}
    >
      <label className="form__label">E-mail</label>
      <input
        className={`form__input ${errors.email && "form__input_type-error"}`}
        id="email-input"
        type="email"
        name="email"
        placeholder="E-mail"
        onChange={handleChange}
        value={values.email || ''}
        pattern={emailRegex}
        required
      ></input>
      <span className="form__input-error">{errors.email}</span>
      <label className="form__label">Пароль</label>
      <input
        className={`form__input ${errors.password && "form__input_type-error"}`}
        id="email-input"
        name="password"
        type="password"
        placeholder="Пароль"
        required
        onChange={handleChange}
        value={values.password || ''}
        minLength="6"
        maxLength="30"
      ></input>
      <span className="form__input-error">{errors.password}</span>
    </Form>
  );
}
export default Login