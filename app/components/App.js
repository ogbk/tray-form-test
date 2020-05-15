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
  validatedPages: Array<Page>,
  user: UserType,
  privacy: PrivacyType,
  done: DoneType,
};

export default class App extends Component<{}, State> {
  state:State = {
    page: 'User',
    validatedPages: [],
    user: {},
    privacy: {},
    done: {},
  };

  render() {
    const {
      page,
      validatedPages,
      user,
      privacy,
      done,
    } = this.state;

    return (
      <div id="app" className="main">
        <div className="page-tab">
          <span className={page === 'User' ? 'selected' : ''}>User</span>
          <span className={page === 'Privacy' ? 'selected' : ''}>Privacy</span>
          <span className={page === 'Done' ? 'selected' : ''}>Done</span>
        </div>
        {
          page === 'User'
          && <User data={user} isValidated={validatedPages.includes('User')} />
        }
        {
          page === 'Privacy'
          && <Privacy data={privacy} isValidated={validatedPages.includes('Privacy')} />
        }
        {
          page === 'Done'
          && <Done data={done} />
        }
      </div>
    );
  }
}
