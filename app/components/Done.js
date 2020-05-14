// @flow

import React from 'react';
import type { DoneType } from './App';

const Done = ({ data: { message } }: {data: DoneType}) => (
  <div>
    <h3>{message}</h3>
  </div>
);

export default Done;
