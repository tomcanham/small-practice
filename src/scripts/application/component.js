import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

import Header from '../header/component'

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

    return <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  }
}

export default connect((state) => state.application, { ...actions })(App)
