import { REQUEST_LOCATION, RECIEVE_LOCATION, RECIEVE_LOCATION_ERROR, RESOLVE_LOCATION_ERROR, REQUEST_USER_SEARCHES, RECIEVE_USER_SEARCHES, RECIEVE_USER_SEARCHES_ERROR } from './actions'

const DEFAULT_STATE = {
    isFetching: false,
    zipcode: '',
    cityState: '',
    geolocation: [],
    err: false,
    errorMsg: ''
}
const requestLocation = (state, action) => {
  const newLocationData = {}
  Object.assign(newLocationData, state.locationData, {
    isFetching: action.isFetching,
    zipcode: action.zipcode
  })
  const newState = {}
  Object.assign(newState, state, {locationData: newLocationData})
  return newState
}
const recieveLocation = (state, action) => {
  const newLocationData = {}
  Object.assign(newLocationData, state.locationData, {
    isFetching: action.isFetching,
    cityState: action.cityState,
    geolocation: action.geolocation
  })
  const newState = {}
  Object.assign(newState, state, {locationData: newLocationData})
  return newState
}
const recieveLocationError = (state, action) => {
  const newLocationData = {}
  Object.assign(newLocationData, state.locationData, {
    isFetching: action.isFetching,
    zipcode: action.zipcode,
    err: action.err,
    errorMsg: action.errorMsg
  })
  const newState = {}
  Object.assign(newState, state, {locationData: newLocationData})
  return newState
}
const resolveLocationError = (state, action) => {
  const newLocationData = {}
  Object.assign(newLocationData, state.locationData, {
    err: action.err,
    errorMsg: action.errorMsg
  })
  const newState = {}
  Object.assign(newState, state, {locationData: newLocationData})
  return newState
}
const requestUserSearches = (state, action) => {
  const newUserData = {}
  Object.assign(newUserData, state.userData, {
    isFetching: action.isFetching
  })
  const newState = {}
  Object.assign(newState, state, {userData: newUserData})
  return newState
}
const recieveUserSearches = (state, action) => {
  const newUserData = {}
  Object.assign(newUserData, state.userData, {
    isFetching: action.isFetching,
    searches: action.searches
  })
  const newState = {}
  Object.assign(newState, state, {userData: newUserData})
  return newState
}
const recieveUserSearchesError = (state, action) => {
  const newUserData = {}
  Object.assign(newUserData, state.userData, {
    isFetching: action.isFetching,
    err: action.err
  })
  const newState = {}
  Object.assign(newState, state, {userData: newUserData})
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