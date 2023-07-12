import React from "react";
import Form from "../Form/Form";
import  "../Form/Form.css";

function Login() {
  return (
    <Form
      title="Рады видеть!"
      btnText="Войти"
      text="Еще не зарегестрированы?"
      link={"/signup"}
      linkText="Регистрация"
      route={"/movies"}
    >
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
        minLength="2"
        maxLength="30"
      ></input>
    </Form>
  );
}
export default Login