import React from "react";
import Form from "../Form/Form";
import '../Form/Form.css'

function Register() {
  return (
    <Form
      title="Добро пожаловать!"
      btnText="Зарегистрироваться"
      text="Уже зарегестрированы?"
      link={"/signin"}
      linkText="Войти"
      route={"/signin"}
    >
      <label className="form__label">Имя</label>
      <input
        className="form__input"
        id="name-input"
        name="Имя"
        type="text"
        placeholder="Имя"
        required
      ></input>
      <label className="form__label">E-mail</label>
      <input
        className="form__input"
        id="email-input"
        type="email"
        placeholder="E-mail"
        required
      ></input>
      <label className="form__label">Пароль</label>
      <input
        className="form__input"
        id="email-input"
        type="password"
        placeholder="Пароль"
        required
      ></input>
    </Form>
  );
}
export default Register