import React, { Component } from 'react';
import './CheckAnimate.scss'

class CheckAnimate extends Component {

  render() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle className="path circle" fill="none" stroke="#FFF" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
        <polyline className="path check" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
      </svg>
    )
  }
}

export default CheckAnimate;
