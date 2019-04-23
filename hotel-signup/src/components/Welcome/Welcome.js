import React, { Component } from 'react'
import Icon from '../Icon/Icon'
import CheckAnimate from '../CheckAnimate/CheckAnimate'
import './Welcome.scss'

class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  titleMessage = (title, user) => {
    return title.replace(/@\w*@/g, user)
  }

  render() {
    const { welcome, user } = this.props

    return (
      <section className="welcome">
        <div className="welcome__header">
          <h1 className="title">
            { this.titleMessage(welcome.welcomeTitle, user) }
          </h1>
          <CheckAnimate className="welcome__check"/>
        </div>

        {/* Display User advantages only when exist */}
        { welcome.advantages ? (
          <div className="welcome__advantages">
            <h2 className="welcome__advantages__title">Advantages</h2>
            <ul className="welcome__advantages__list">
              { welcome.advantages.map((item, key) => {
                return (
                  <li className="welcome__advantages__item" key={key}>
                    <Icon icon="check-circle" className="icon--m" />
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null}

        {/* Display User advantages only when exist */}
        { welcome.welcomeMessage ? (
          <p className="message">{welcome.welcomeMessage}</p>
        ) : null}

        <button type="button" className="btn btn--primary welcome__continue">Continue</button>
      </section>
    )
  }
}

export default Welcome