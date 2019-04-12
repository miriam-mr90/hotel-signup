import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { userTypes } from './user-types.json';
import { users } from './users.json';
import UserSelector from './components/UserSelector/UserSelector.js';
import SignupForm from './components/SignupForm/SignupForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userTypes,
      users,
      //types: userTypes.map(type => [type.label, type.name])
      types: userTypes.map(type => ({ label: type.label, name: type.name })),
      newUser: null
    }

    this.addUser = this.addUser.bind(this)
  }

  addUser(user) {
    // Add new user to Users -> send data
    this.setState({
      users: [...this.state.users, user],
      newUser: [...this.state.newUser, user],
    })
  }

  render() {
    //const types = userTypes.map(type => [type.label, type.name])

    return (
      <div className="App">
        <div>
          {this.state.users.map((user, i) => {

            return (
              <p>{user.name}</p>
            )
          })}
        </div>

        <header className="header">
          <h1>My app title</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <UserSelector types={this.state.types}/>
        <SignupForm onAddUser={this.addUser} type="Hotel guest"/>
      </div>
    );
  }
}

export default App;
