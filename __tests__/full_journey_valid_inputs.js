/* eslint-disable */

import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';
import App from '../app/components/App';
import User from '../app/components/User';
import Privacy from '../app/components/Privacy';
import Done from '../app/components/Done';

configure({ adapter: new Adapter() });

let app;

beforeAll(() => {
  app = mount(<App />);
});

describe('FULL JOURNEY WITH VALID INPUT FIELDS', () => {

  test('on render -> no page is validated', () => {
    let tabs = app.find('.page-tab > span');

    expect (tabs.at(0).hasClass('validated')).toEqual(false);
    expect (tabs.at(1).hasClass('validated')).toEqual(false);
    expect (tabs.at(2).hasClass('validated')).toEqual(false);
  });

  test('correctly fill & validate user form page ', () => {

    // fill User form correctly
    app.find('input[name="name"]').simulate('change', { target: { name: 'name', value: 'John Doe' } });
    app.find('input[name="role"]').simulate('change', { target: { name: 'role',  value: 'Carpenter' } });
    app.find('input[name="email"]').simulate('change', { target: { name: 'email',  value: 'john@gmail.com' } });
    app.find('input[name="password"]').simulate('change', { target: { name: 'password',  value: '12345678pW' } });

    // simulate User submit
    let userFormValues = app.find(User).state('values'); 
    app.find(User).props().submitPage(userFormValues);

    // simulate <App /> refresh
    app.update();
    
    // Only User is validatd
    let tabs_UserOk = app.find('.page-tab > span');
    expect (tabs_UserOk.at(0).hasClass('validated')).toEqual(true);
    expect (tabs_UserOk.at(1).hasClass('validated')).toEqual(false);
    expect (tabs_UserOk.at(2).hasClass('validated')).toEqual(false);
    
    // Only Privacy is selected
    expect (tabs_UserOk.at(0).hasClass('selected')).toEqual(false);
    expect (tabs_UserOk.at(1).hasClass('selected')).toEqual(true);
    expect (tabs_UserOk.at(2).hasClass('selected')).toEqual(false);

    // Select only products [checkbox 2] on Privacy
    app.find('input[name="products"]').simulate('change', { target: { name: 'products', checked: true } });

    // simulate Privacy submit
    let privacyFormValues = app.find(Privacy).state(); 
    app.find(Privacy).props().submitPage(privacyFormValues);

    // simulate <App /> refresh
    app.update();

    // Only User, Privacy and Done are validated
    // Done is validated too -> via submitPage() in componentDidMount()
    let tabs_PrivacyOk = app.find('.page-tab > span');
    expect (tabs_PrivacyOk.at(0).hasClass('validated')).toEqual(true);
    expect (tabs_PrivacyOk.at(1).hasClass('validated')).toEqual(true);
    expect (tabs_PrivacyOk.at(2).hasClass('validated')).toEqual(true);
    
    // Only Done is selected
    expect (tabs_PrivacyOk.at(0).hasClass('selected')).toEqual(false);
    expect (tabs_PrivacyOk.at(1).hasClass('selected')).toEqual(false);
    expect (tabs_PrivacyOk.at(2).hasClass('selected')).toEqual(true);

    // RESULT
    expect (userFormValues).toEqual({
      name: 'John Doe',
      role: 'Carpenter',
      email: 'john@gmail.com',
      password: '12345678pW'
    });
    expect (privacyFormValues).toEqual({ 
      updates: false,
      products: true
    });

    expect (app.state('pages')['User']['data']).toEqual(userFormValues);
    expect (app.state('pages')['Privacy']['data']).toEqual(privacyFormValues);

  });

})
