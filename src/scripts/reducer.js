// fake reducer
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import application from './application/reducer'
import header from './header/reducer'

export default combineReducers({
  application,
  header,
  routing: routerReducer
})
