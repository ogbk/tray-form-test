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

type PageType = 'User' | 'Privacy' | 'Done';

type State = {
  currentPage: PageType,
  validatedPages: Array<PageType>,
  pages: {
    User: {component: any, data: UserType},
    Privacy: {component: any, data: PrivacyType},
    Done: {component: any, data: DoneType},
  },
};

export default class App extends Component<{}, State> {
  state:State = {
    currentPage: 'User',
    validatedPages: [],
    pages: {
      User: { component: User, data: {} },
      Privacy: { component: Privacy, data: {} },
      Done: { component: Done, data: {} },
    },
  };

  render() {
    const {
      currentPage,
      validatedPages,
      pages,
    } = this.state;

    const allPagesKeys: Array<PageType> = Object.keys(pages);
    const RenderCmp = pages[currentPage].component;

    return (
      <div id="app" className="main">
        <div className="page-tab">
          {
            allPagesKeys.map((PageComponent, idx) => {
              let className = '';
              if (currentPage === PageComponent) { className += 'selected '; }
              if (validatedPages.includes(PageComponent)) { className += 'validated '; }

              return (
                <span className={className} key={`${PageComponent}-${idx}`}>{ PageComponent }</span>
              );
            })
          }
        </div>

        <RenderCmp data={pages[currentPage].data} />

      </div>
    );
  }
}
