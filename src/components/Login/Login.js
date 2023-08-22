import React from "react";
import Form from "../Form/Form";
import  "../Form/Form.css";
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin, error, loggedIn, handleCleanError, isLoading }) {

  const { values, errors, handleChange, isFormValid } = useForm();
  const navigate = useNavigate();
 
  React.useEffect(() => {
    loggedIn && navigate('/movies', { replace: true });
  }); 
  
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
      isDisabled={!isFormValid || isLoading}
      error={error}
      formName='login'
      loadingText='Вход...'
      handleCleanError={handleCleanError}
      isLoading={isLoading}
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