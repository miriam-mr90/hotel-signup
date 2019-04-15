import React, { Component } from 'react'
import CheckAnimate from '../CheckAnimate/CheckAnimate'
import './Welcome.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      userType: '',
      userName: ''
    }
  }

  render() {
    if (this.props.user) {
      console.log(this.props.user)
    } else {
      console.log('this.props.user.type is NULL')
    }

    return (
      <section className="welcome">
        {/* TODO: get new user name */}
        {/* <div>
          {this.props.user.map((user, i) => {

            return (
              <p key={i}>{user.name}</p>
            )
          })}
        </div>
        <h2>{this.props.type}</h2> */}
        <div className="welcome__header">
          <h1 className="title">Welcome {this.props.user.name}!</h1>
          <CheckAnimate className="welcome__check"/>
        </div>

        {/* IF advantages */}
        <div className="welcome__advantages">
          <h2 className="welcome__advantages__title">Advantages</h2>
          <ul className="welcome__advantages__list">
            <li className="welcome__advantages__item">
              <FontAwesomeIcon icon="check-circle" className="icon"/>
              Enjoy a 10% discount on your reservation
            </li>
            <li className="welcome__advantages__item">
              <FontAwesomeIcon icon="check-circle" className="icon"/>
              24hs/365 days phone 900-000-0000
            </li>
          </ul>
        </div>
        {/* END -- IF advantages */}

        <button type="button" className="btn btn--primary welcome__continue">Continue</button>
      </section>
    )
  }
}

export default Welcome