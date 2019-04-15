import React, { Component } from 'react'
import CheckAnimate from '../CheckAnimate/CheckAnimate'
import './Welcome.scss'

// Import Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class Welcome extends Component {
  constructor() {
    super()
  }

  render = () => {
    const welcomeMessage = this.props.welcome.title.replace(/@\w*@/g, this.props.welcome.user);

    return (
      <section className="welcome">
        <div className="welcome__header">
          <h1 className="title">{welcomeMessage}</h1>
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
                    <FontAwesomeIcon icon="check-circle" className="icon icon--m" />
                    {adv}
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null}

        {/* Display User advantages only when exist */}
        {this.props.welcome.message ? (
          <p className="message">{this.props.welcome.message}</p>
        ) : null}

        <button type="button" className="btn btn--primary welcome__continue">Continue</button>
      </section>
    )
  }
}

export default Welcome