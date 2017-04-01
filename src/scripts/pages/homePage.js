import React from 'react'
import { connect } from 'react-redux'

import Dashboard from './dashboard'
import WelcomePage from './welcomePage'

const HomePage = (props) => props.user ? <Dashboard {...props} /> : <WelcomePage />
HomePage.propTypes = {
  user: React.PropTypes.object
}

export default connect((state) => state.application)(HomePage)
