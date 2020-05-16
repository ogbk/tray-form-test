// @flow

const EMPTY_STRING = '';

const validateName = (_value: string): string => {
  let error = EMPTY_STRING;
  const value = _value.trim();

  if (!value || value === EMPTY_STRING) {
    error = 'Name is required';
  }

  return error;
};

const validateEmail = (_value: string): string => {
  let error = EMPTY_STRING;
  const value = _value.trim();

  if (!value || value === EMPTY_STRING) {
    error = 'Email is required';
  }

  return error;
};

const validatePassword = (_value: string): string => {
  let error = EMPTY_STRING;
  const value = _value.trim();

  if (!value || value === EMPTY_STRING) {
    error = 'Password is required';
  }

  return error;
};

export { validateName, validateEmail, validatePassword };
