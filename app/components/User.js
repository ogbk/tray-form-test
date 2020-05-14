// @flow

import React, { Component } from 'react';
import type { UserType } from './App';

type Props = {
  data: UserType,
  isValidated: boolean
};

export default class User extends Component<Props, UserType> {
  state:UserType = (() => {
    const { isValidated, data } = this.props;

    if (isValidated) {
      return data;
    }
    return {
      name: '',
      role: '',
      email: '',
      password: '',
    };
  })();

  /*
  togglePlayPause = (): void => {
    const { audio } = this;

    if (audio.ended || audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  */

  render() {
    const {
      name, role, email, password,
    } = this.state;

    return (
      <div>
        <h3>{`NAME: ${name}`}</h3>
        <h3>{`ROLE: ${role}`}</h3>
        <h3>{`EMAIL: ${email}`}</h3>
        <h3>{`PASSWORD: ${password}`}</h3>
      </div>
    );
  }
}
