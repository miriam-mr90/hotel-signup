import React, { Component } from 'react';
import './UserSelector.scss'

class UserSelector extends Component {
  constructor() {
    super()
    this.handleSelectType = this.handleSelectType
  }

  handleSelectType = (type) => {
    this.props.onSelectUserType(type)
  }

  render() {
    return (
      <section className="user-selector">
        <h1 className="title">Signup</h1>
        <h2 className="subtitle">What kind of user are you?</h2>
        <ul className="user-selector__list">
          { this.props.types.map((type, key) => {
            return (
              <li className="user-selector__item" key={key}>
                <button
                  type="submit"
                  className="btn btn--secondary btn--full"
                  onClick={this.handleSelectType.bind(this, type.key)}>
                  {type.label}
                </button>
              </li>
            )
          }) }
        </ul>
        <p className="user-selector__disclaimer message message--centered">
          Enjoy a 10% discount on your reservation just for signup
        </p>
      </section>
    )
  }
}

export default UserSelector;