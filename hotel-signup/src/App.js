import React, { Component } from 'react'

import './styles/app.scss'
import './App.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { userTypes } from './user-types.json'
import { users } from './users.json'
import UserSelector from './components/UserSelector/UserSelector'
import SignupForm from './components/SignupForm/SignupForm'
import Welcome from './components/Welcome/Welcome'


library.add(fas)


class App extends Component {
  constructor() {
    super()
    this.state = {
      userTypes,
      users,
      types: userTypes.map(type => ({ label: type.label, name: type.name })),
      newUser: [],
      selectedUserType: '',
      currentView: 'select-type'
    }

    this.addUser = this.addUser.bind(this)
    this.selectUserType = this.selectUserType.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  goBack = () => {
    this.setState({
      currentView: 'select-type'
    })
  }

  selectUserType = (type) => {
    this.setState({
      selectedUserType: [...this.state.selectedUserType, type],
      currentView: 'signup-form'
    })
  }

  addUser = (user) => {
    console.log('addUSer function')
    // Add new user to Users -> send data
    this.setState({
      users: [...this.state.users, user],
      newUser: [...this.state.newUser, user],
      currentView: 'welcome'
    })
  }

  render = () => {
    //const types = userTypes.map(type => [type.label, type.name])

    return (
      <div className="App">
        <header className="header">
          <div className="wrapper">
            <nav className="nav">
              <button
                className="btn btn--ghost nav__btn"
                onClick={this.goBack}>
                <FontAwesomeIcon icon="chevron-left" className="icon" />
              </button>
              <button className="btn btn--ghost nav__btn nav__close">
                <FontAwesomeIcon icon="times" className="icon" />
              </button>
            </nav>
          </div>
        </header>

        <main className="main wrapper">
          {
            this.state.currentView === 'select-type' && <UserSelector onSelectUserType={this.selectUserType} types={this.state.types} />
          }
          {
            this.state.currentView === 'signup-form' && <SignupForm onAddUser={this.addUser} type={this.state.selectedUserType} typeLabel="Hotel guest" />
          }
          {
            this.state.currentView === 'welcome' && <Welcome user={this.state.newUser} type={this.state.selectedUserType} />
          }
        </main>
      </div>
    );
  }
}

export default App
