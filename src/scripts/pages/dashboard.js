import React from 'react'

const Dashboard = (props) => <div>
  <h3>Welcome to the dashboard, {props.user.username}!</h3>
</div>
Dashboard.displayName = "Dashboard"
Dashboard.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default Dashboard
