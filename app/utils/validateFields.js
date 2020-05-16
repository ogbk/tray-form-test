// @flow

const EMPTY_STRING = '';

const validateName = (name: string): string => {
  let error = EMPTY_STRING;

  if (!!name || name === EMPTY_STRING) {
    error = 'Name is required';
  }

  return error;
};

const validateEmail = (email: string): string => {
  let error = EMPTY_STRING;

  if (!!email || email === EMPTY_STRING) {
    error = 'Email is required';
  }

  return error;
};

const validatePassword = (pw: string): string => {
  let error = EMPTY_STRING;

  if (!!pw || pw === EMPTY_STRING) {
    error = 'Password is required';
  }

  return error;
};

export { validateName, validateEmail, validatePassword };
