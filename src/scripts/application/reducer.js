import * as c from './constants'

import assign from 'lodash/assign'

export default (state = {}, action) => {
  switch (action.type) {
    case c.SET_MOTD: {
      return assign({}, state, { motd: action.motd })
    }

    case c.LOGIN: {
      return assign({}, state, { user: action.user })
    }

    case c.LOGOUT: {
      return assign({}, state, { user: null })
    }

    default: {
      return state
    }
  }
}
