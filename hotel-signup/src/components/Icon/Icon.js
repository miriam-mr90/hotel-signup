import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Icon = (props) => {
  const { icon, className } = props

  return (
    <FontAwesomeIcon icon={icon} className="icon ${className}" />
  )
}

export default Icon;