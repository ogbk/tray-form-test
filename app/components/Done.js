// @flow

import React, { Component } from 'react';

type Props = {
  submitPage: () => void,
};

export default class Done extends Component<Props, {}> {
  componentDidMount = () => {
    const { submitPage } = this.props;
    submitPage();
  }

  render() {
    return (
      <div>
        <h3>Well done !!</h3>
        <h2>
          Please verify your email address.
          You should have received an email from us already.
        </h2>
      </div>
    );
  }
}
