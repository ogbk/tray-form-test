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
let tabs;

beforeAll(() => {
  app = mount(<App />);
  tabs = app.find('.page-tab > span');
});

describe('<App/>', () => {

  test('show tabs of pages in correct order: [User, Privacy, Done]', () => {
    expect (tabs).toHaveLength(3);
    expect (tabs.children()).toHaveLength(3);

    expect (tabs.at(0).text()).toEqual('User');
    expect (tabs.at(1).text()).toEqual('Privacy');
    expect (tabs.at(2).text()).toEqual('Done');
  });
  
  test('on initial render, show only first page => <User/>', () => {
    expect (tabs.at(0).hasClass('selected')).toEqual(true);
    expect (tabs.at(1).hasClass('selected')).toEqual(false);
    expect (tabs.at(2).hasClass('selected')).toEqual(false);
    
    expect (app.containsMatchingElement(<User />)).toEqual(true);
    expect (app.containsMatchingElement(<Privacy />)).toEqual(false);
    expect (app.containsMatchingElement(<Done />)).toEqual(false);
  });

})
