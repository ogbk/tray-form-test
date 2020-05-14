// @flow

import React from 'react';
import type { PrivacyType } from './App';

const Privacy = ({
  data: {
    updates: { updateInfo, updateAgree },
    products: { productsInfo, productsAgree },
  },
}: {data: PrivacyType}) => (
  <div>
    <h3>
      {updateInfo}
      {updateAgree}
    </h3>
    <h3>
      {productsInfo}
      {productsAgree}
    </h3>
  </div>
);

export default Privacy;
