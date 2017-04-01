"use strict"

// routing stuff
import { browserHistory } from 'react-router'

// redux and middleware
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import thunk from 'redux-thunk'

// import combined reducers
import reducers from './reducer'

const routingMiddleware = routerMiddleware(browserHistory)

// Add the reducer to your store on the `routing` key
export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(thunk), applyMiddleware(routingMiddleware)) // store enhancer
)
