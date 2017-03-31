import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

class HomePage extends Component {
  static propTypes = {
    motd: React.PropTypes.string,
    getMotd: React.PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.getMotd()
  }

  render() {
    return <div>
      <h1>Welcome to Small Practice</h1>
      <div className="motd">{this.props.motd}</div>
    </div>
  }
}

export default connect((state) => state.homePage, actions)(HomePage)
