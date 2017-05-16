import { REQUEST_LOCATION, RECIEVE_LOCATION, RECIEVE_LOCATION_ERROR, RESOLVE_LOCATION_ERROR, REQUEST_USER_SEARCHES, RECIEVE_USER_SEARCHES, RECIEVE_USER_SEARCHES_ERROR } from './actions'

const DEFAULT_STATE = {
  data: {
    recent: [],
    isFetching: false,
    zipcode: '',
    cityState: '',
    geolocation: [],
    err: false,
    errorMsg: '' 
  }
}
const requestLocation = (state, action) => {
  const newSearches = {}
  Object.assign(newSearches, state.data, {
    isFetching: action.isFetching,
    zipcode: action.zipcode
  })
  const newState = {}
  Object.assign(newState, state, {data: newSearches})
  return newState
}
const recieveLocation = (state, action) => {
  const newSearches = {}
  Object.assign(newSearches, state.data, {
    isFetching: action.isFetching,
    cityState: action.cityState,
    geolocation: action.geolocation
  })
  const newState = {}
  Object.assign(newState, state, {data: newSearches})
  return newState
}
const recieveLocationError = (state, action) => {
  const newSearches = {}
  Object.assign(newSearches, state.data, {
    isFetching: action.isFetching,
    zipcode: action.zipcode,
    err: action.err,
    errorMsg: action.errorMsg
  })
  const newState = {}
  Object.assign(newState, state, {data: newSearches})
  return newState
}
const resolveLocationError = (state, action) => {
  const newSearches = {}
  Object.assign(newSearches, state.data, {
    err: action.err,
    errorMsg: action.errorMsg
  })
  const newState = {}
  Object.assign(newState, state, {data: newSearches})
  return newState
}
const requestUserSearches = (state, action) => {
  const newUsers = {}
  Object.assign(newUsers, state.data, {
    isFetching: action.isFetching
  })
  const newState = {}
  Object.assign(newState, state, {data: newUsers})
  return newState
}
const recieveUserSearches = (state, action) => {
  const newUsers = {}
  Object.assign(newUsers, state.data, {
    isFetching: action.isFetching,
    recent: action.searches
  })
  const newState = {}
  Object.assign(newState, state, {data: newUsers})
  return newState
}
const recieveUserSearchesError = (state, action) => {
  const newUsers = {}
  Object.assign(newUsers, state.data, {
    isFetching: action.isFetching,
    err: action.err
  })
  const newState = {}
  Object.assign(newState, state, {data: newUsers})
  return newState
}

const searches = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case REQUEST_LOCATION:
      return requestLocation(state, action)
    case RECIEVE_LOCATION:
      return recieveLocation(state, action)
    case RECIEVE_LOCATION_ERROR:
      return recieveLocationError(state, action)
    case RESOLVE_LOCATION_ERROR:
      return resolveLocationError(state, action)
    case REQUEST_USER_SEARCHES:
      return requestUserSearches(state, action)
    case RECIEVE_USER_SEARCHES:
      return recieveUserSearches(state, action)
    case RECIEVE_USER_SEARCHES_ERROR:
      return recieveUserSearchesError(state, action)
    default:
      return state
  }
}

export default searches