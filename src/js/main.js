import React from 'react'
import ReactDOM from 'react-dom'
import CounterApp from './react/CounterApp'
import initDisclosure from './vanilla/Disclosure'

// init react app
ReactDOM.render(<CounterApp />, document.querySelector('#js-react-counter-app'))

// init standalone component
initDisclosure()
