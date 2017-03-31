import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './application/component'
import HomePage from './pages/homePage/page'

const routes =
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
  </Route>

export default routes
