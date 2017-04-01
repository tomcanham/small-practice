import React from 'react'
import { connect } from 'react-redux'

const WelcomePage = (props) => <div>
  <h1>Welcome to Small Practice</h1>
  <h3>The premier practice management software for small- to medium-sized law paractices</h3>
  <p>Want to take a tour? Click <a>here</a>.</p>
  <p>Interested in joining? Click <a>here</a> to begin your free one month trial!</p>
  <h5 className="motd">{props.motd}</h5>
</div>

WelcomePage.propTypes = {
  motd: React.PropTypes.string
}

export default connect((state) => state.application)(WelcomePage)
