import React, { Component } from 'react'
import CheckAnimate from '../CheckAnimate/CheckAnimate'
import './Welcome.scss'

import Icon from '../Icon/Icon'

class Welcome extends Component {
  constructor() {
    super()

    this.customMessage = this.customMessage
  }

  customMessage = (title, user) => {
    return title.replace(/@\w*@/g, user)
  }

  render() {
    return (
      <section className="welcome">
        <div className="welcome__header">
          <h1 className="title">
            {this.customMessage(this.props.welcome.welcomeTitle, this.props.userName)}
          </h1>
          <CheckAnimate className="welcome__check"/>
        </div>

        {/* Display User advantages only when exist */}
        {this.props.welcome.advantages ? (
          <div className="welcome__advantages">
            <h2 className="welcome__advantages__title">Advantages</h2>
            <ul className="welcome__advantages__list">
              {this.props.welcome.advantages.map((adv, key) => {
                return (
                  <li className="welcome__advantages__item" key={key}>
                    <Icon icon="check-circle" className="icon--m" />
                    {adv}
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null}

        {/* Display User advantages only when exist */}
        {this.props.welcome.welcomeMessage ? (
          <p className="message">{this.props.welcome.welcomeMessage}</p>
        ) : null}

        <button type="button" className="btn btn--primary welcome__continue">Continue</button>
      </section>
    )
  }
}

export default Welcome