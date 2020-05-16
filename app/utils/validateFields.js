// @flow

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
  const value = _value.trim();

  if (!value || value === EMPTY_STRING) {
    return ('Password is required');
  }

  return EMPTY_STRING;
};

export { validateName, validateEmail, validatePassword };
