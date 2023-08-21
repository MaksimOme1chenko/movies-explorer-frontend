import React from "react";
import Form from "../Form/Form";
import '../Form/Form.css'
import { emailRegex, userRegex } from "../../utils/constants";
import useForm from '../../hooks/useForm';


function Register({ onRegistr, error }) {
  const { values, errors, handleChange, isFormValid } = useForm()

  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-lone-blocks
    {onRegistr({
      name: values.name,
      email: values.email,
      password: values.password,
    })};
  }

  return (
    <Form
      title="Добро пожаловать!"
      btnText="Зарегистрироваться"
      text="Уже зарегестрированы?"
      link={"/signin"}
      linkText="Войти"
      handleSubmit={handleSubmit}
      isDisabled={!isFormValid}
      error={error}
    >
      <label className="form__label">Имя</label>
      <input
        className={`form__input ${errors.name && "form__input_type-error"}`}
        id="name-input"
        name="name"
        type="text"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        onChange={handleChange}
        value={values.name || ''}
        pattern={userRegex}
        title="Поле должно содержать только латиницу, кириллицу, пробел или дефис"
      
      ></input>
      <span className="form__input-error">{errors.name}</span>
      <label className="form__label">E-mail</label>
      <input
        className={`form__input ${errors.email && "form__input_type-error"}`}
        id="email-input"
        name="email"
        type="email"
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
        type="password"
        name="password"
        placeholder="Пароль"
        onChange={handleChange}
        value={values.password || ''}
        minLength="6"
        maxLength="30"
        required
      ></input>
      <span className="form__input-error">{errors.password}</span>
    </Form>
  );
}
export default Register