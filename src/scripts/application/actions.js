import { push as pushLocation } from 'react-router-redux'

import * as c from './constants'
import api from '../api/index'

export const getMotd = () => async (dispatch) => {
  const motd = await api.motd()
  dispatch({ type: c.SET_MOTD, motd })
}

export const login = (user) => async (dispatch) => {
  dispatch({ type: c.LOGIN, user })
}

export const logout = () => async (dispatch) => {
  dispatch({ type: c.LOGOUT })
  dispatch(pushLocation('/'))
}
