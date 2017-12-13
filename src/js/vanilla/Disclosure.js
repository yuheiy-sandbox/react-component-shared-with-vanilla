import React from 'react'
import ReactDOM from 'react-dom'
import Disclosure from '../react/Disclosure'

const init = () => {
  document.querySelectorAll('.js-react-disclosure').forEach((el) => {
    const heading = el.dataset.heading
    const children = el.innerHTML
    ReactDOM.render(
      <Disclosure
        heading={heading}
        standalone={true}
      >
        {children}
      </Disclosure>,
      el,
    )
    el.hidden = false
  })
}

export default init
