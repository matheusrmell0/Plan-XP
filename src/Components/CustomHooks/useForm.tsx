import React from 'react';

const types: FormTypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  number: {
    regex: /^[\d,.?!]+$/,
    message: 'Este campo só aceita números',
  },
};

const useForm = (type?: string | boolean | RegExp) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  function validation(valueChecked: string) {
    if (type === false) return true;
    if (valueChecked.length === 0) {
      setError('Preencha o campo');
      return false;
    } else if (
      typeof types === 'string' &&
      typeof type === 'string' &&
      types[type] &&
      types[type].regex instanceof RegExp &&
      !types[type].regex.test(valueChecked)
    ) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (error) validation(event.target.value);
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validation: () => validation(value),
    onBlur: () => validation(value),
  };
};

export default useForm;
