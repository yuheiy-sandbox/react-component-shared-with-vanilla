import React from 'react'
import Disclosure from './Disclosure'

export default class CounterApp extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    this.state = {
      isExpanded: false,
      count: 0,
    }

    this.onToggle = this.onToggle.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onToggle() {
    this.setState(({isExpanded}) => ({isExpanded: !isExpanded}))
  }

  onClick() {
    this.setState(({count}) => ({count: count + 1}))
  }

  render() {
    const {isExpanded, count} = this.state

    return <div className="CounterApp">
      <Disclosure
        open={isExpanded}
        heading="Counter App"
        onToggle={this.onToggle}
      >
        <div className="CounterApp__count">
          count:
          {' '}
          <b className="CounterApp__countText" aria-live="polite">
            {count}
          </b>
        </div>

        <div className="CounterApp__controller">
          <button
            className="CounterApp__increment"
            type="button"
            onClick={this.onClick}
          >
            increment
          </button>
        </div>
      </Disclosure>
    </div>
  }
}
