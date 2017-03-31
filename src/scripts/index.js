"use strict"

import './assets'

import React from 'react'
import ReactDOM from 'react-dom'

// routing stuff
import { Router, browserHistory } from 'react-router'
import routes from './routes'

// redux store
import { Provider } from 'react-redux'
import store from './store'
import { syncHistoryWithStore } from 'react-router-redux'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// render the route set
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
