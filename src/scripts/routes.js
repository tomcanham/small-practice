import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './application/component'
import HomePage from './pages/homePage'
import Contacts from './pages/contacts'

const routes =
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />

    <Route path="contacts" component={Contacts} />
  </Route>

export default routes
