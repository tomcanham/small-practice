"use strict"

import React from 'react'
import ReactDOM from 'react-dom'

// routing stuff
import { Router, browserHistory } from 'react-router'

// redux and middleware
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import './assets'
import routes from './routes'

// import the store singleton
import store from './store'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// render the route set
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
