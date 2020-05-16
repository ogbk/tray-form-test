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
    } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <span>name: </span>
          <input type="text" name="name" value={name} onChange={this.handleInputChange} />
        </div>
        <div>
          <span>role: </span>
          <input type="text" name="role" value={role} onChange={this.handleInputChange} />
        </div>
        <div>
          <span>email: </span>
          <input type="text" name="email" value={email} onChange={this.handleInputChange} />
        </div>
        <div>
          <span>password: </span>
          <input type="password" name="password" value={password} onChange={this.handleInputChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>

    );
  }
}
