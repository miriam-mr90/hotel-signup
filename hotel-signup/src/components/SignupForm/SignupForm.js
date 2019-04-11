import React, { Component } from 'react';

class SignupForm extends Component {
  handleInput(){
    console.log('Writing...')
  }

  render() {
    return (
      <div>
        <p>---- Form here ----</p>
        <input
          type="text"
          name="title"
          onChange={this.handleInput}
          placeholder="Enter title"
        />
      </div>
    )
  }
}

export default SignupForm;