// fake reducer
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import application from './application/reducer'

export default combineReducers({
  application,
  routing: routerReducer
})
