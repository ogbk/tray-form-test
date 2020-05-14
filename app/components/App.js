// @flow

import React, { Component } from 'react';
import User from './User';
import Privacy from './Privacy';
import Done from './Done';

export type UserType = {
  name: string,
  role: string,
  email: string,
  password: string,
};

export type PrivacyType = {
  updates: {updateInfo: string, updateAgree: boolean },
  products: {productsInfo: string, productsAgree: boolean },
};

export type DoneType = {
  message: string;
};

type Page = 'User' | 'Privacy' | 'Done';

type State = {
  page: Page,
  validated: Array<Page>,
  user: UserType,
  privacy: PrivacyType,
  done: DoneType,
};

export default class App extends Component<{}, State> {
  state:State = {
    page: 'User',
    validated: [],
    user: {},
    privacy: {},
    done: {},
  };

  render() {
    const {
      page,
      validated,
      user,
      privacy,
      done,
    } = this.state;

    return (
      <div id="app">
        {
          page === 'User'
          && <User data={user} isValidated={validated.includes('User')} />
        }
        {
          page === 'Privacy'
          && <Privacy data={privacy} isValidated={validated.includes('Privacy')} />
        }
        {
          page === 'Done'
          && <Done data={done} />
        }
      </div>
    );
  }
}
