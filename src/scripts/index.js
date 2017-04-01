"use strict"

import React from 'react'
import ReactDOM from 'react-dom'

// routing stuff
import { Router, browserHistory } from 'react-router'

// redux and middleware
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

import thunk from 'redux-thunk'

import './assets'
import routes from './routes'

// import combined reducers
import reducers from './reducer'

const routingMiddleware = routerMiddleware(browserHistory)

// Add the reducer to your store on the `routing` key
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(thunk), applyMiddleware(routingMiddleware)) // store enhancer
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// render the route set
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
