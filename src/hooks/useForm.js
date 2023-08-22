import React from "react";
import isEmail from 'validator/es/lib/isEmail';

const useForm = () => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'name' && event.target.validity.patternMismatch) {
      event.target.setCustomValidity('Имя должно содержать только кириллицу, латиницу, пробел или дефис.')
    } else if (name === 'email' && !isEmail(value)) {
      event.target.setCustomValidity('Неверный формат адреса электронной почты')
    } else {
      event.target.setCustomValidity('')
    }

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });

    setIsFormValid(event.target.closest('#form').checkValidity());
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setValues, setErrors, setIsFormValid],
  );

  return {
    values,
    errors,
    handleChange,
    isFormValid,
    resetForm
  };
};

export default useForm;