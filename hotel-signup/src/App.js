import React, { Component } from 'react'

import './styles/styles.scss'
import './App.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { userTypes } from './user-types.json'
import UserSelector from './components/UserSelector/UserSelector'
import SignupForm from './components/SignupForm/SignupForm'
import Welcome from './components/Welcome/Welcome'


library.add(fas)


class App extends Component {
  constructor() {
    super()
    this.state = {
      userTypes,
      users: [],
      currentView: 'select-type',
      types: userTypes.map((type, key) => ({ key: key, label: type.label })),
      signupForm: {
        title: '',
        form: []
      },
      welcome: {
        name: '',
        title: '',
        message: '',
        advantages: []
      },
      welcome: []
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

  selectUserType = (typeKey) => {
    const type = this.state.userTypes[typeKey]

    this.setState({
      signupForm: {
        ...this.state.signupForm,
        title: type.pageTitle,
        form: type.form
      },
      welcome: {
        ...this.state.welcome,
        title: type.welcomeTitle,
        message: type.welcomeMessage,
        advantages: type.advantages,
      },
      currentView: 'signup-form'
    })
  }

  addUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
      welcome: {
        ...this.state.welcome,
        user: user.name
      },
      currentView: 'welcome'
    })
  }

  render = () => {

    return (
      <div className="App">
        <header className="header wrapper">
            <nav className="nav">
            {this.state.currentView !== 'select-type' ? (
                <button
                  className="btn btn--ghost nav__btn"
                  onClick={this.goBack}>
                  <FontAwesomeIcon icon="chevron-left" className="icon" />
                </button>
              ) : null}

              <button className="btn btn--ghost nav__btn nav__close">
                <FontAwesomeIcon icon="times" className="icon" />
              </button>
            </nav>
        </header>

        <main className="main wrapper">
          {
            this.state.currentView === 'select-type' && <UserSelector onSelectUserType={this.selectUserType} types={this.state.types} />
          }
          {
            this.state.currentView === 'signup-form' && <SignupForm onAddUser={this.addUser} form={this.state.signupForm} />
          }
          {
            this.state.currentView === 'welcome' && <Welcome welcome={this.state.welcome} />
          }
        </main>
      </div>
    )
  }
}

export default App
