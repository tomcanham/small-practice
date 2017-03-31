import * as c from './constants'

export default (state = {}, action) => {
  switch (action.type) {
    case c.SET_MOTD: {
      return { motd: action.motd }
    }

    default: {
      return state
    }
  }
}
