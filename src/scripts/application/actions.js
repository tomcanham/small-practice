import * as c from './constants'
import api from '../api/index'

export const getMotd = () => async (dispatch) => {
  const motd = await api.motd()
  dispatch({ type: c.SET_MOTD, motd })
}
