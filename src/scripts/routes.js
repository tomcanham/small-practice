import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { push as pushLocation } from 'react-router-redux'

import App from './application/component'
import HomePage from './pages/homePage'
import Dummy from './pages/dummy'
import store from './store'

function isLoggedIn() {
  const state = store.getState()
  return state && state.application && state.application.user
}

function requireAuth() {
  if (!isLoggedIn()) {
    console.log("NOT LOGGED IN!")
    store.dispatch(pushLocation('/'))
  }
}

const routes =
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />

    <Route onEnter={requireAuth}>
      <Route path="contacts" component={Dummy('Contacts')} />
      <Route path="matters" component={Dummy('Matters')} />
      <Route path="time" component={Dummy('Time Tracking')} />
      <Route path="billing" component={Dummy('Billing')} />
    </Route>
  </Route>

export default routes
