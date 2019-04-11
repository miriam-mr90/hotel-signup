import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { userTypes } from './user-types.json';
import UserSelector from './components/UserSelector/UserSelector.js';
import SignupForm from './components/SignupForm/SignupForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userTypes,
      //types: userTypes.map(type => [type.label, type.name])
      types: userTypes.map(type => ({ label: type.label, name: type.name }))
    }
  }

  render() {
    //const types = userTypes.map(type => [type.label, type.name])

    return (
      <div className="App">
        {/* { types } */}
        <header className="header">
          <h1>My app title</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <UserSelector types={ this.state.types }/>
        <SignupForm type="Hotel guest"/>
      </div>
    );
  }
}

export default App;
