import React, { Component } from 'react';

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {

    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isFormValid = this.isFormValid.bind(this)
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("Sending this user data:")
    console.log(this.state)
    this.props.onAddUser(this.state)
  }

  isFormValid = () => {
    console.log('isFormValid');
    const { type, name, lastName, email, phone } = this.state

    return type && name && lastName && email && phone
  }

  render() {
    return (
      <section className="signup-form">
        <h1 className="title">{this.props.typeLabel}</h1>

        <form onSubmit={this.handleSubmit} className="form">
          <div className="form__group">
            <label for="type">Type</label>
            <select name="type" onChange={this.handleInput}>
              <option value="hotel-guest">A hotel guest</option>
              <option value="travel-agency">A travel agency</option>
              <option value="company">A company</option>
            </select>
          </div>
          <div className="form__group">
            <label for="name">name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleInput}
            />
          </div>
          <div className="form__group">
            <label for="lastName">lastName</label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleInput}
            />
          </div>
          <div className="form__group">
            <label for="email">email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleInput}
            />
          </div>
          <div className="form__group">
            <label for="phone">phone</label>
            <input
              type="tel"
              name="phone"
              onChange={this.handleInput}
            />
          </div>
          <p className="message">*required fields</p>
          <button type="submit" className="btn btn--primary signup-form__send" disabled={!this.isFormValid}>Send</button>
        </form>
      </section>
    )
  }
}

export default SignupForm;