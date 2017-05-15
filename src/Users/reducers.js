import { REQUEST_USER_CREATION, RECIEVE_USER_TOKEN, RECIEVE_CREDENTIALS_ERROR, REQUEST_USER_LOGIN, REQUEST_USER_LOGOUT, RECIEVE_USER_LOGOUT,
RESOLVE_CREDENTIALS_ERROR } from './actions'


const DEFAULT_STATE = {
  userData: {
    isFetching: false,
    token: '',
    searches: [],
    err: false,
    errorMsg: ''
  }
}

const requestUserCreation = (state, action) => {
  const newUserData = {}
  Object.assign(newUserData, state.userData, {
    isFetching: action.isFetching
  })
  const newState = {}
  Object.assign(newState, state, {userData: newUserData})
  return newState
}
const requestUserLogin = (state, action) => {
  const newUserData = {}
  Object.assign(newUserData, state.userData, {
    isFetching: action.isFetching
  })
  const newState = {}
  Object.assign(newState, state, {userData: newUserData})
  return newState
}
const recieveUserToken = (state, action) => {
  const newUserData = {}
  Object.assign(newUserData, state.userData, {
    isFetching: action.isFetching,
    token: action.token
  })
  const newState = {}
  Object.assign(newState, state, {userData: newUserData})
  return newState
}

const requestUserLogOut = (state, action) => {
  const newUserData = {}
  Object.assign(newUserData, state.userData, {
    isFetching: action.isFetching,
    token: action.token
  })
  const newState = {}
  Object.assign(newState, state, {userData: newUserData})
  return newState
}
const recieveUserLogOut = (state, action) => {
  const newUserData = {}
  Object.assign(newUserData, state.userData, {
    isFetching: action.isFetching
  })
  const newState = {}
  Object.assign(newState, state, {userData: newUserData})
  return newState
}

const recieveCredentialsError = (state, action) => {
  const newUserData = {}
  Object.assign(newUserData, state.userData, {
    isFetching: action.isFetching,
    err: action.err,
    errorMsg: action.errorMsg
  })
  const newState = {}
  Object.assign(newState, state, {userData: newUserData})
  return newState
}
const resolveCredentialsError = (state, action) => {
  const newUserData = {}
  Object.assign(newUserData, state.userData, {
    err: action.err,
    errorMsg: action.errorMsg
  })
  const newState = {}
  Object.assign(newState, state, {userData: newUserData})
  return newState
}

const usersReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case REQUEST_USER_CREATION:
      return requestUserCreation(state, action)
    case REQUEST_USER_LOGIN:
      return requestUserLogin(state, action)
    case RECIEVE_USER_TOKEN:
      return recieveUserToken(state, action)
    case REQUEST_USER_LOGOUT:
      return requestUserLogOut(state, action)
    case RECIEVE_USER_LOGOUT:
      return recieveUserLogOut(state, action)
    case RECIEVE_CREDENTIALS_ERROR:
      return recieveCredentialsError(state, action)
    case RESOLVE_CREDENTIALS_ERROR:
      return resolveCredentialsError(state, action)
    default:
      return state
  }
}

export default usersReducer