import { REQUEST_USER_CREATION, RECIEVE_USER_TOKEN, RECIEVE_CREDENTIALS_ERROR, REQUEST_USER_LOGIN, REQUEST_USER_LOGOUT, RECIEVE_USER_LOGOUT,
RESOLVE_CREDENTIALS_ERROR } from './actions'


const DEFAULT_STATE = {
  data: {
    isFetching: false,
    token: '',
    searches: [],
    err: false,
    errorMsg: ''    
  }
}

const requestUserCreation = (state, action) => {
  const newUsers = {}
  Object.assign(newUsers, state.data, {
    isFetching: action.isFetching
  })
  const newState = {}
  Object.assign(newState, state, {data: newUsers})
  return newState
}
const requestUserLogin = (state, action) => {
  const newUsers = {}
  Object.assign(newUsers, state.data, {
    isFetching: action.isFetching
  })
  const newState = {}
  Object.assign(newState, state, {data: newUsers})
  return newState
}
const recieveUserToken = (state, action) => {
  const newUsers = {}
  Object.assign(newUsers, state.data, {
    isFetching: action.isFetching,
    token: action.token
  })
  const newState = {}
  Object.assign(newState, state, {data: newUsers})
  return newState
}

const requestUserLogOut = (state, action) => {
  const newUsers = {}
  Object.assign(newUsers, state.data, {
    isFetching: action.isFetching,
    token: action.token
  })
  const newState = {}
  Object.assign(newState, state, {data: newUsers})
  return newState
}
const recieveUserLogOut = (state, action) => {
  const newUsers = {}
  Object.assign(newUsers, state.data, {
    isFetching: action.isFetching
  })
  const newState = {}
  Object.assign(newState, state, {data: newUsers})
  return newState
}

const recieveCredentialsError = (state, action) => {
  const newUsers = {}
  Object.assign(newUsers, state.data, {
    isFetching: action.isFetching,
    err: action.err,
    errorMsg: action.errorMsg
  })
  const newState = {}
  Object.assign(newState, state, {data: newUsers})
  return newState
}
const resolveCredentialsError = (state, action) => {
  const newUsers = {}
  Object.assign(newUsers, state.data, {
    err: action.err,
    errorMsg: action.errorMsg
  })
  const newState = {}
  Object.assign(newState, state, {data: newUsers})
  return newState
}

const users = (state = DEFAULT_STATE, action) => {
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

export default users