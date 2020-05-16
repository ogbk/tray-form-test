// @flow

import React, { Component } from 'react';
import type { UserType } from './App';

/*
type Props = {
  data: UserType,
  isValidated: boolean
};
*/

type State = {
  errors: UserType,
  values: UserType
};

export default class User extends Component<{}, State> {
  state:State = (() => {
    const empty = {
      name: '',
      role: '',
      email: '',
      password: '',
    };

    return ({
      errors: { ...empty },
      values: { ...empty },
    });
  })();


  /* prepopulate persisted data */
  /*
  state:UserType = (() => {
    const { isValidated, data } = this.props;

    if (isValidated) {
      return data;
    }
    return {
      name: '',
      role: '',
      email: '',
      password: '',
    };
  })();
  */

  handleInputChange = ({ target: { name, value } }: any): void => {
    const { values } = this.state;

    this.setState({
      values: {
        ...values,
        [name]: value,
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
