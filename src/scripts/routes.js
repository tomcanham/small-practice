import React from 'react'
import { Route, IndexRoute } from 'react-router'
import homePage from './pages/homePage'

const routes =
  <Route path="/">
    <IndexRoute component={homePage} />
  </Route>

export default routes
