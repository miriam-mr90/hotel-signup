import React, { Component } from 'react';
import './SignupForm.scss'

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const data = new FormData(event.target);
    const formValues = {}

    for (let name of data.keys()) {
      let input = form.elements[name]
      formValues[input.name]= input.value
    }

    this.setState({
      formData: [...this.state.formData, formValues]
    })

    this.props.onAddUser(formValues)
  }

  isFormValid = () => {
    // Form validation
  }

  render = () => {
    const { form, title } = this.props;

    return (
      <section className="signup-form">
        <h1 className="title">{title}</h1>

        <form onSubmit={this.handleSubmit} className="form">
          {
            form.map((input, key) => (
              <div className="form__group" key={key}>
                <label htmlFor="type">{input.label}</label>
                <input
                  type={input.type}
                  name={input.name}
                />
              </div>
            ))
          }
          <p className="message">*required fields</p>
          <button type="submit" className="btn btn--primary signup-form__send" disabled={!this.isFormValid}>Send</button>
        </form>
      </section>
    )
  }
}

export default SignupForm;