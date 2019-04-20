import React, { Component } from 'react'
import { userTypes } from './user-types.json'
import Icon from './components/Icon/Icon'
import UserSelector from './components/UserSelector/UserSelector'
import SignupForm from './components/SignupForm/SignupForm'
import Welcome from './components/Welcome/Welcome'
import './styles/styles.scss'
import './App.scss'

const userTypesValues = userTypes.map((type, key) => ({ key: key, label: type.label }))

// Set different Signup steps
const steps = {
  welcome: 'welcome',
  signupForm: 'signup-form',
  selectType: 'select-type'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userTypes,
      users: [],
      currentView: steps.selectType,
      userTypeSelected: {},
      userName:''
    }
  }

  goBack = () => {
    this.setState({
      currentView: steps.selectType
    })
  }

  selectUserType = (typeKey) => {
    // Set userTypeSelected
    this.setState({
      userTypeSelected: this.state.userTypes[typeKey],
      currentView: steps.signupForm
    })
  }

  addUser = (user) => {
    // Save new user data and user name to display in Welcome view
    this.setState({
      users: [...this.state.users, user],
      userName: user.name,
      currentView: steps.welcome
    })
  }

  render () {
    const { currentView, userTypeSelected } = this.state

    // Check which step is currently active
    let isSelectTypeStep = currentView === steps.selectType
    let isSignupFormStep = currentView === steps.signupForm
    let isWelcomeStep = currentView === steps.welcome

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
            isSignupFormStep && <SignupForm onAddUser={this.addUser} title={userTypeSelected.pageTitle} form={userTypeSelected.form} />
          }
          {
            isWelcomeStep && <Welcome welcome={userTypeSelected} user={this.state.userName}/>
          }
        </main>
      </div>
    )
  }
}

export default App
