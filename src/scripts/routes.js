import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './application/component'
import HomePage from './pages/homePage'
import Dummy from './pages/dummy'

const routes =
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />

    <Route path="contacts" component={Dummy('Contacts')} />
    <Route path="matters" component={Dummy('Matters')} />
    <Route path="time" component={Dummy('Time Tracking')} />
    <Route path="billing" component={Dummy('Billing')} />
  </Route>

export default routes
