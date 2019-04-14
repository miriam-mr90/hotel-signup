import React, { Component } from 'react';

class UserSelector extends Component {
  constructor() {
    super()
    this.handleSelectType = this.handleSelectType.bind(this)
  }

  handleSelectType(type) {
    // let type = e.target.value
    console.log(type)
    this.props.onSelectUserType(type)
  }

  render() {
    // this.props.types.map((type) => {
    //   //console.log('Name: '+ type.name + '; Label: ' + type.label)
    //   return 0
    // })

    return (
      <section className="user-selection">
        <h1 className="title">Signup</h1>
        <h2 className="subtitle">What kind of user are you?</h2>
        <ul className="user-selection__list">
          { this.props.types.map((type, key) => {
            return (
              <li className="user-selection__item"
                onClick={this.handleSelectType.bind(this, type.name)}
                key={key}>
                <button type="submit" className="btn btn--secondary btn--full" onClick={this.handleSelectType.bind(this, type.name)}>{type.label}</button>
              </li>
            )
          }) }
        </ul>
        <p className="message message--centered">Enjoy a 10% discount on your reservation just for signup</p>
      </section>
    )
  }
}

export default UserSelector;