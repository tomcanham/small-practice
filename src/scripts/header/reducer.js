import * as application from '../application/constants'
import * as header from './constants'

import assign from 'lodash/assign'

export default (state = {}, action) => {
  switch (action.type) {
    case application.LOGIN: {
      return assign({}, state, { loggedIn: true, username: action.user.username })
    }

    case application.LOGOUT: {
      return assign({}, state, { loggedIn: false, username: null })
    }

    case header.OPEN_MENU: {
      return assign({}, state, { opened: action.name })
    }

    case header.CLOSE_MENU: {
      return assign({}, state, { opened: null })
    }

    default: {
      return state
    }
  }
}
