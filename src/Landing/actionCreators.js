import { REQUEST_USER_CREATION, RECIEVE_USER_TOKEN, RECIEVE_CREDENTIALS_ERROR, REQUEST_USER_LOGIN, REQUEST_USER_LOGOUT, RECIEVE_USER_LOGOUT,
RESOLVE_CREDENTIALS_ERROR } from './actions'
import { postLogin, deleteLogout, postUser } from './requests'

export function requestUserCreation (userData) {
  return {
    type: REQUEST_USER_CREATION,
    isFetching: true
  }
}
export function requestUserLogin (userData) {
  return {
    type: REQUEST_USER_LOGIN,
    isFetching: true
  }
}
export function recieveUserToken (token) {
  return {
    type: RECIEVE_USER_TOKEN,
    isFetching: false,
    token
  }
}
export function requestUserLogOut (token) {
  return {
    type: REQUEST_USER_LOGOUT,
    token: '',
    isFetching: true
  }
}
export function recieveUserLogout (response) {
  return {
    type: RECIEVE_USER_LOGOUT,
    isFetching: false
  }
}
export function recieveCredentialsError (userData) {
  return {
    type: RECIEVE_CREDENTIALS_ERROR,
    isFetching: false,
    errorMsg: 'Login failed check your email and password for mistakes',
    err: true
  }
}
export function resolveCredentialsError () {
  return {
    type: RESOLVE_CREDENTIALS_ERROR,
    errorMsg: '',
    err: false
  }
}
export function postUserCreation (userData) {
  return function (dispatch, getState) {
    dispatch(requestUserCreation(userData))
    postUser(userData.email, userData.password)
    .then((response) => {
      dispatch(recieveUserToken(response.data.data.token))
    })
    .catch((error) => {
      console.log(error)
      dispatch(recieveCredentialsError(userData))
    })
  }
}
export function postSessionCreation (userData) {
  return function (dispatch, getState) {
    dispatch(requestUserCreation(userData))
    postLogin(userData.email, userData.password)
    .then((response) => {
      dispatch(recieveUserToken(response.data.data.token))
    })
    .catch((error) => {
      console.log(error)
      dispatch(recieveCredentialsError(userData))
    })
  }
}
export function deleteSessionDestroy (token) {
  return function (dispatch, getState) {
    dispatch(requestUserLogOut(token))
    deleteLogout(token)
    .then((response) => {
      dispatch(recieveUserLogout(response))
    })
    .catch((error) => {
      console.log(error)
      dispatch(recieveCredentialsError(token))
    })
  }
}