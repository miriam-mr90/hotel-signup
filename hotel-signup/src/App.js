import React, { Component } from 'react'

import './styles/styles.scss'
import './App.scss'

import { userTypes } from './user-types.json'
import Icon from './components/Icon/Icon'
import UserSelector from './components/UserSelector/UserSelector'
import SignupForm from './components/SignupForm/SignupForm'
import Welcome from './components/Welcome/Welcome'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userTypes,
      users: [],
      currentView: 'select-type',
      types: userTypes.map((type, key) => ({ key: key, label: type.label })),
      userTypeSelected: {},
      userName:''
    }

    this.addUser = this.addUser
    this.selectUserType = this.selectUserType
    this.goBack = this.goBack
  }

  goBack = () => {
    this.setState({
      currentView: 'select-type'
    })
  }

  selectUserType = (typeKey) => {
    // Set userTypeSelected
    this.setState({
      userTypeSelected: this.state.userTypes[typeKey],
      currentView: 'signup-form'
    })
  }

  addUser = (user) => {
    // Save new user data and user name to display in Welcome view
    this.setState({
      users: [...this.state.users, user],
      userName: user.name,
      currentView: 'welcome'
    })
  }

  render () {
    return (
      <div className="App">
        <header className="header wrapper">
            <nav className="nav">
            {this.state.currentView !== 'select-type' ? (
                <button
                  className="btn btn--ghost nav__btn"
                  onClick={this.goBack}>
                  <Icon icon="chevron-left" />
                </button>
              ) : null}

              <button className="btn btn--ghost nav__btn nav__close">
                <Icon icon="times"/>
              </button>
            </nav>
        </header>

        <main className="main wrapper">
          {
            this.state.currentView === 'select-type' && <UserSelector onSelectUserType={this.selectUserType} types={this.state.types} />
          }
          {
            this.state.currentView === 'signup-form' && <SignupForm onAddUser={this.addUser} title={this.state.userTypeSelected.pageTitle} form={this.state.userTypeSelected.form} />
          }
          {
            this.state.currentView === 'welcome' && <Welcome welcome={this.state.userTypeSelected} user={this.state.userName}/>
          }
        </main>
      </div>
    )
  }
}

export default App
