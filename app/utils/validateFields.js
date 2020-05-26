// @flow

import type { UserType } from '../components/App';

const EMPTY_STRING = '';

const validateName = (_value: string): string => {
  const value = _value.trim();

  if (!value || value === EMPTY_STRING) {
    return ('Name is required');
  }

  return EMPTY_STRING;
};

const validateEmail = (_value: string): string => {
  const valueStr = _value.trim();

  if (!valueStr || valueStr === EMPTY_STRING) {
    return ('Email is required');
  }

  const valueArr = valueStr.split('');
  if (valueArr.filter((v) => (v === '@')).length !== 1
    || valueStr.startsWith('.')
    || valueStr.endsWith('.')
  ) {
    return ('Email is not valid');
  }

  const fullDomain = valueStr.split('@')[1];
  const host = fullDomain.slice(0, fullDomain.lastIndexOf('.'));
  const suffix = fullDomain.slice(fullDomain.lastIndexOf('.') + 1);

  if (!fullDomain
    || !host
    || !suffix
    || !fullDomain.includes('.')
    || suffix.length < 2
    || host.length < 2
    || host.startsWith('.')
  ) {
    return ('Email is not valid');
  }

  return EMPTY_STRING;
};

const validatePassword = (_value: string): string => {
  const valueStr = _value.trim();

  if (!valueStr || valueStr === EMPTY_STRING) {
    return ('Password is required');
  }

  const valueArr = valueStr.split('');

  if (valueStr.length < 10
    || !valueArr.some((v) => ('0'.charCodeAt(0) <= v.charCodeAt(0) && v.charCodeAt(0) <= '9'.charCodeAt(0)))
    || !valueArr.some((v) => ('a'.charCodeAt(0) <= v.charCodeAt(0) && v.charCodeAt(0) <= 'z'.charCodeAt(0)))
    || !valueArr.some((v) => ('A'.charCodeAt(0) <= v.charCodeAt(0) && v.charCodeAt(0) <= 'Z'.charCodeAt(0)))
  ) {
    return ('Password is not valid. It must contain 10 or more chars, 1 number, 1 upper case and 1 lowercase');
  }

  return EMPTY_STRING;
};

const validatePage = (errors: UserType, values: UserType) => {
  const { name, email, password } = values;
  const valuesList = [name, email, password];
  const errorsList = Object.values(errors);

  return (
    errorsList.every((thisError) => (thisError === EMPTY_STRING))
  && valuesList.every((thisValue) => (!!thisValue && thisValue !== EMPTY_STRING))
  );
};

export {
  validateName, validateEmail, validatePassword, validatePage,
};
