/* eslint-disable */

import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';
import App from '../app/components/App';

configure({ adapter: new Adapter() });

test('Setup test', () => {
  const app = shallow(<App />);

  console.log('Setup OK');
});
