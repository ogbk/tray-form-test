import React from 'react';
import { render } from 'react-dom';
import App from './App.tsx';
require('../sass/styles.sass');

render(
  <App />,
  window.document.getElementById('root'),
);
