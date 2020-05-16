// @flow

import React, { Component } from 'react';
import {
  validateName,
  validateEmail,
  validatePassword,
} from '../utils/validateFields';
import type { UserType } from './App';

const EMPTY_STRING = '';

type State = {
  errors: UserType,
  values: UserType
};

export default class User extends Component<{}, State> {
  state:State = (() => {
    const empty = {
      name: EMPTY_STRING,
      role: EMPTY_STRING,
      email: EMPTY_STRING,
      password: EMPTY_STRING,
    };

    return ({
      errors: { ...empty },
      values: { ...empty },
    });
  })();

  validatePage = () => {
    const { errors } = this.state;
    const errorsList = Object.values(errors);
    return errorsList.every((thisError) => (thisError === EMPTY_STRING));
  };

  handleInputChange = ({ target: { name, value } }: any): void => {
    const { values, errors } = this.state;

    let error = EMPTY_STRING;

    switch (name) {
      case 'name':
        error = validateName(value);
        break;

      case 'email':
        error = validateEmail(value);
        break;

      case 'password':
        error = validatePassword(value);
        break;

      default:
        break;
    }

    this.setState({
      values: {
        ...values,
        [name]: value,
      },
      errors: {
        ...errors,
        [name]: error,
      },
    });
  }

  render() {
    const {
      values: {
        name, role, email, password,
      },
      errors: {
        name: nameError, email: emailError, password: passwordError,
      },
    } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <span>name: </span>
          <span className="is-required">*</span>
          <input
            type="text" name="name" value={name} onChange={this.handleInputChange}
            className={nameError ? 'input-error' : ''}
          />
          <br />
          <span className="error-text">{ nameError }&nbsp;</span>
        </div>

        <div>
          <span>role: </span>
          <input type="text" name="role" value={role} onChange={this.handleInputChange} />
          <br />
          <span className="error-text">&nbsp;</span>
        </div>

        <div>
          <span>email: </span>
          <span className="is-required">*</span>
          <input
            type="text" name="email" value={email} onChange={this.handleInputChange}
            className={emailError ? 'input-error' : ''}
          />
          <br />
          <span className="error-text">{ emailError }&nbsp;</span>
        </div>

        <div>
          <span>password: </span>
          <span className="is-required">*</span>
          <input
            type="password" name="password" value={password} onChange={this.handleInputChange}
            className={passwordError ? 'input-error' : ''}
          />
          <br />
          <span className="error-text">{ passwordError }&nbsp;</span>
        </div>

        <input type="submit" value="Submit" />
      </form>

    );
  }
}
