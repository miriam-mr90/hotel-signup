import React from 'react'

// Import Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Icon = (props) => {
  return (
    <FontAwesomeIcon icon={props.icon} className={"icon " + props.className} />
  )
}

export default Icon;