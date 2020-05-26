// @flow

import React, { Component } from 'react';
import type { PrivacyType } from './App';

type Props = {
  submitPage: (PrivacyType) => void,
};

export default class User extends Component<Props, PrivacyType> {
  state:PrivacyType = {
    updates: false,
    products: false,
  };

  handleInputChange = ({ target: { name, checked } }: any): void => {
    this.setState({
      [name]: checked,
    });
  };

  handleSubmit = (evt: any) => {
    evt.preventDefault();

    const { state } = this;
    const { submitPage } = this.props;
    submitPage(state);
  }

  render() {
    const { updates, products } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <input type="checkbox" name="updates" value={updates} onChange={this.handleInputChange} />
          <span>Receive updates about our products by email </span>
        </div>

        <div>
          <input type="checkbox" name="products" value={products} onChange={this.handleInputChange} />
          <span>Receive communication by email for other products created by the team</span>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
