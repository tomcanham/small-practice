// redux and middleware
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

// import combined reducers
import reducers from './reducer'

// Add the reducer to your store on the `routing` key
export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk) // store enhancer
)
