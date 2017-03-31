import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

class App extends Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    getMotd: React.PropTypes.func.isRequired
  }

  // initial app load actions go here
  componentWillMount() {
    const { getMotd } = this.props

    getMotd()
  }

  render() {
    const { children } = this.props

    return <div className="app">
      {children}
    </div>
  }
}

export default connect((state) => state, { ...actions })(App)
