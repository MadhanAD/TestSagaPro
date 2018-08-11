import { createAction } from 'redux-actions'

export const LOGIN = 'login/login'
export const loginApiCall = createAction(LOGIN)

export const LOGIN_REQUEST = 'login/login_request'
export const loginRequest = createAction(LOGIN_REQUEST)

export const LOGIN_SUCCESS = 'login/login_success'
export const loginSuccess = createAction(LOGIN_SUCCESS)

export const LOGIN_FAILED = 'login/login_failed'
export const loginFailed = createAction(LOGIN_FAILED)