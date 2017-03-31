// fake reducer
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import homePage from './pages/homePage/reducer'

export default combineReducers({
  homePage,
  routing: routerReducer
})
