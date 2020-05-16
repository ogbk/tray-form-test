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
  updates: boolean,
  products: boolean,
};

type PageType = 'User' | 'Privacy' | 'Done';

type State = {
  currentPage: PageType,
  validatedPages: Array<PageType>,
  pages: {
    User: {component: any, data: UserType},
    Privacy: {component: any, data: PrivacyType},
    Done: {component: any},
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

  receivePageValues = (values: any): void => {
    const {
      currentPage,
      validatedPages,
      pages,
    } = this.state;

    const allPages = Object.keys(pages);
    const lengthPages = allPages.length;

    if (allPages.includes(currentPage)) {
      if (currentPage !== allPages[lengthPages - 1]) {
        const pageValues:any = pages[currentPage];
        pageValues.data = values;

        const nextPage = allPages[allPages.indexOf(currentPage) + 1];

        this.setState({
          pages: {
            ...pages,
            [currentPage]: pageValues,
          },
          currentPage: nextPage,
          validatedPages: [
            ...validatedPages,
            currentPage,
          ],
        });
      } else {
        /* eslint-disable no-console */
        console.log('USER DETAILS');
        console.log(pages.User.data);
        console.log('PRIVACY - COMMUNICATION PREFERENCES ');
        console.log(pages.Privacy.data);
        /* eslint-enable no-console */

        this.setState({
          validatedPages: [
            ...validatedPages,
            currentPage,
          ],
        });
      }
    }
  }

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

        <RenderCmp submitPage={this.receivePageValues} />

      </div>
    );
  }
}
