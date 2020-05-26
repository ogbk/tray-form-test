// @flow

import React, { Component } from 'react';
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePage,
} from '../utils/validateFields';
import type { UserType } from './App';

const EMPTY_STRING = '';

type Props = {
  submitPage: (UserType) => void,
};

type State = {
  errors: UserType,
  values: UserType
};

export default class User extends Component<Props, State> {
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

  handleSubmit = (evt: any) => {
    evt.preventDefault();

    const { errors, values } = this.state;
    const shouldSubmit = validatePage(errors, values);

    if (shouldSubmit) {
      const { submitPage } = this.props;
      submitPage(values);
    } else {
      const {
        name, email, password,
      } = values;
      const nameError = validateName(name);
      const emailError = validateEmail(email);
      const passwordError = validatePassword(password);

      this.setState({
        errors: {
          name: nameError,
          email: emailError,
          role: '',
          password: passwordError,
        },
      });
    }
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
          <div className="input-label">
            <span>name: </span>
            <span className="is-required">*</span>
          </div>
          <input
            type="text" name="name" value={name} onChange={this.handleInputChange}
            className={nameError ? 'input-error' : ''}
          />
          <br />
          <span className="error-text">{ nameError }&nbsp;</span>
        </div>

        <div>
          <div className="input-label">
            <span>role: </span>
          </div>
          <input type="text" name="role" value={role} onChange={this.handleInputChange} />
          <br />
          <span className="error-text">&nbsp;</span>
        </div>

        <div>
          <div className="input-label">
            <span>email: </span>
            <span className="is-required">*</span>
          </div>
          <input
            type="text" name="email" value={email} onChange={this.handleInputChange}
            className={emailError ? 'input-error' : ''}
          />
          <br />
          <span className="error-text">{ emailError }&nbsp;</span>
        </div>

        <div>
          <div className="input-label">
            <span>password: </span>
            <span className="is-required">*</span>
          </div>
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
