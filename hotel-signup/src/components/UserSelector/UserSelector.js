import React, { Component } from 'react';

class UserSelector extends Component {

  render() {
    this.props.types.map((type, i) => {
      //console.log('Name: '+ type.name + '; Label: ' + type.label)
      return 0
    })

    return (
      <div>
        <p>What kind of user are you?</p>
        <ul>
          { this.props.types.map((type, i) => {

            return (
              <li>{ type.label }</li>
            )
          }) }

          {/* <li>A hotel guest</li>
          <li>A travel agency</li>
          <li>A company</li> */}
        </ul>
      </div>
    )
  }
}


export default UserSelector;
