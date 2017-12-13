import React from 'react'

export default class Disclosure extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    if (props.standalone) {
      this.isStandalone = true
      this.state = {
        isExpanded: false,
      }
    }

    this.onClick = this.onClick.bind(this)
  }

  get open() {
    if (this.isStandalone) {
      return this.state.isExpanded
    }

    return this.props.open
  }

  onClick() {
    if (this.isStandalone) {
      this.setState(({isExpanded}) => ({isExpanded: !isExpanded}))
      return
    }

    this.props.onToggle()
  }

  render() {
    const {heading, children} = this.props

    return <section className="Disclosure">
      <h3 className="Disclosure__heading">
        <button
          className="Disclosure__trigger"
          type="button"
          aria-expanded={this.open}
          onClick={this.onClick}
        >
          {heading}
        </button>
      </h3>

      {this.isStandalone
        ? <div
            className="Disclosure__content"
            hidden={!this.open}
            dangerouslySetInnerHTML={{__html: children}} />
        : <div
            className="Disclosure__content"
            hidden={!this.open}
          >
            {children}
          </div>
      }
    </section>
  }
}
