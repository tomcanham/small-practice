import * as application from '../application/actions'
import * as c from './constants'

export const doLogin = () => async (dispatch) => dispatch(application.login({ username: 'fake@user.com' }))
export const doLogout = () => async (dispatch) => dispatch(application.logout())
export const openMenu = (name) => async (dispatch) => dispatch({ type: c.OPEN_MENU, name })
export const closeMenu = () => async (dispatch) => dispatch({ type: c.CLOSE_MENU })
