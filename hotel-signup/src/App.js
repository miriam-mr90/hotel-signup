import React, { Component } from 'react'

import './styles/styles.scss'
import './App.scss'

import { userTypes } from './user-types.json'
import Icon from './components/Icon/Icon'
import UserSelector from './components/UserSelector/UserSelector'
import SignupForm from './components/SignupForm/SignupForm'
import Welcome from './components/Welcome/Welcome'

const userTypesValues = userTypes.map((type, key) => ({ key: key, label: type.label }))

// Set different Signup steps
const welcomeStep = 'welcome'
const signupFormStep = 'signup-form'
const selectTypeStep = 'select-type'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userTypes,
      users: [],
      currentView: selectTypeStep,
      userTypeSelected: {},
      userName:''
    }

    this.addUser = this.addUser
    this.selectUserType = this.selectUserType
    this.goBack = this.goBack
  }

  goBack = () => {
    this.setState({
      currentView: selectTypeStep
    })
  }

  selectUserType = (typeKey) => {
    // Set userTypeSelected
    this.setState({
      userTypeSelected: this.state.userTypes[typeKey],
      currentView: signupFormStep
    })
  }

  addUser = (user) => {
    // Save new user data and user name to display in Welcome view
    this.setState({
      users: [...this.state.users, user],
      userName: user.name,
      currentView: welcomeStep
    })
  }

  render () {
    //
    let isSelectTypeStep = this.state.currentView === selectTypeStep
    let isSignupFormStep = this.state.currentView === signupFormStep
    let isWelcomeStep = this.state.currentView === welcomeStep

    return (
      <div className="App">
        <header className="header wrapper">
            <nav className="nav">
            {!isSelectTypeStep ? (
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
            isSelectTypeStep && <UserSelector onSelectUserType={this.selectUserType} types={userTypesValues} />
          }
          {
            isSignupFormStep && <SignupForm onAddUser={this.addUser} title={this.state.userTypeSelected.pageTitle} form={this.state.userTypeSelected.form} />
          }
          {
            isWelcomeStep && <Welcome welcome={this.state.userTypeSelected} user={this.state.userName}/>
          }
        </main>
      </div>
    )
  }
}

export default App
