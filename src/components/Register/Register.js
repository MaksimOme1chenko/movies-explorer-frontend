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
      <label className="form__field">Имя</label>
      <input
        className="form__input"
        id="name-input"
        type="text"
        required
      ></input>
      <label className="form__field">E-mail</label>
      <input
        className="form__input"
        id="email-input"
        type="email"
        required
      ></input>
      <label className="form__field">Пароль</label>
      <input
        className="form__input"
        id="email-input"
        type="password"
        required
      ></input>
    </Form>
  );
}
export default Register