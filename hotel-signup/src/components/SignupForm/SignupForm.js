import React, { Component } from 'react';

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
      type: '',
      name: '',
      lastName: '',
      email: '',
      phone: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.sendSignupForm = this.sendSignupForm.bind(this)
  }

  handleInput(e) {
    // Update states
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })

    //console.log(this.state)
  }

  sendSignupForm(e) {
    e.preventDefault()
    console.log("Sending this user data:")
    console.log(this.state)
    this.props.onAddUser(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendSignupForm}>
          <p>
            <select name="type" onChange={this.handleInput}>
              <option value="hotel-guest">A hotel guest</option>
              <option value="travel-agency">A travel agency</option>
            </select>
          </p>
          <p>
            <input
              type="text"
              name="name"
              onChange={this.handleInput}
              placeholder="Enter name..."
            />
          </p>
          <p>
            <input
              type="text"
              name="lastName"
              onChange={this.handleInput}
              placeholder="Enter last name..."
            />
          </p>
          <p>
            <input
              type="email"
              name="email"
              onChange={this.handleInput}
              placeholder="Enter email..."
            />
          </p>
          <p>
            <input
              type="tel"
              name="phone"
              onChange={this.handleInput}
              placeholder="Enter phone..."
            />
          </p>
          <button type="submit">Send</button>
        </form>

      </div>
    )
  }
}

export default SignupForm;