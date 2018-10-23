import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Landing</h1>
        <SignUp />
        <LogIn />
      </div>
    );
  }
}

export default Landing;
