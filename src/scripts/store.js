// redux and middleware
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import thunk from 'redux-thunk'

// import combined reducers
import reducers from './reducer'

// Add the reducer to your store on the `routing` key
export default createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  {}, // initial state
  applyMiddleware(thunk) // store enhancer
)
