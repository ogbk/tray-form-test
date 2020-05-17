/* eslint-disable */

import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';
import App from '../app/components/App';
import User from '../app/components/User';
import Privacy from '../app/components/Privacy';
import Done from '../app/components/Done';

configure({ adapter: new Adapter() });

const EMPTY_NAME = 'Name is required';
const EMPTY_EMAIL = 'Email is required';
const EMPTY_PASSWORD = 'Password is required';

const INVALID_EMAIL = 'Email is not valid';
const INVALID_PASSWORD = 'Password is not valid. It must contain 10 or more chars, 1 number, 1 upper case and 1 lowercase';

let app;

beforeEach(() => {
  app = mount(<App />);
});

describe('invalid user values', () => {
  
  test('strings with whitespaces -> invalid [name, email, password] ', () => {

    // string filled wih empty spaces ('  ') treated as error for fields (name, email, password)
    // See Readme documentation

    app.find('input[name="name"]').simulate('change', { target: { name: 'name', value: '   ' } });
    expect (app.find('input[name="name"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['name']).toEqual(EMPTY_NAME);

    app.find('input[name="email"]').simulate('change', { target: { name: 'email', value: '   ' } });
    expect (app.find('input[name="email"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['email']).toEqual(EMPTY_EMAIL);

    app.find('input[name="password"]').simulate('change', { target: { name: 'password', value: '   ' } });
    expect (app.find('input[name="password"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['password']).toEqual(EMPTY_PASSWORD);

  });


  test('fail validation -> [email] ', () => {

    app.find('input[name="email"]').simulate('change', { target: { name: 'email', value: '@.' } });
    expect (app.find('input[name="email"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['email']).toEqual(INVALID_EMAIL);

    app.find('input[name="email"]').simulate('change', { target: { name: 'email', value: 'john@a@gmail.com' } });
    expect (app.find('input[name="email"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['email']).toEqual(INVALID_EMAIL);

    app.find('input[name="email"]').simulate('change', { target: { name: 'email', value: 'john@gmail.com.' } });
    expect (app.find('input[name="email"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['email']).toEqual(INVALID_EMAIL);

    app.find('input[name="email"]').simulate('change', { target: { name: 'email', value: 'john@g.c' } });
    expect (app.find('input[name="email"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['email']).toEqual(INVALID_EMAIL);

    app.find('input[name="email"]').simulate('change', { target: { name: 'email', value: 'john@gm.c' } });
    expect (app.find('input[name="email"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['email']).toEqual(INVALID_EMAIL);

    app.find('input[name="email"]').simulate('change', { target: { name: 'email', value: 'john.gmail@com.' } });
    expect (app.find('input[name="email"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['email']).toEqual(INVALID_EMAIL);

  });


  test('fail validation -> [password] ', () => {

    app.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'pw' } });
    expect (app.find('input[name="password"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['password']).toEqual(INVALID_PASSWORD);

    app.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'mypassword' } });
    expect (app.find('input[name="password"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['password']).toEqual(INVALID_PASSWORD);

    app.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'mypasswo12' } });
    expect (app.find('input[name="password"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['password']).toEqual(INVALID_PASSWORD);

    app.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'myPassword' } });
    expect (app.find('input[name="password"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['password']).toEqual(INVALID_PASSWORD);

    app.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'myPasswo4' } });
    expect (app.find('input[name="password"]').hasClass('input-error'));
    expect (app.find(User).state('errors')['password']).toEqual(INVALID_PASSWORD);

  });

})
