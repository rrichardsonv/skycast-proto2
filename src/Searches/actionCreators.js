import { REQUEST_LOCATION, RECIEVE_LOCATION, RECIEVE_LOCATION_ERROR, RESOLVE_LOCATION_ERROR, REQUEST_USER_SEARCHES, RECIEVE_USER_SEARCHES, RECIEVE_USER_SEARCHES_ERROR } from './actions'
import { getSearches, getGeocoding } from './requests'
import { getWeatherData } from '../Forecasts/actionCreators'

export function requestUserSearches (token) {
  return {
    type: REQUEST_USER_SEARCHES,
    isFetching: true
  }
}
export function recieveUserSearches (searchData) {
  return {
    type: RECIEVE_USER_SEARCHES,
    isFetching: false,
    searches: searchData
  }
}
export function recieveSearchesError (userData) {
  return {
    type: RECIEVE_USER_SEARCHES_ERROR,
    isFetching: false,
    err: true
  }
}
export function getUserSearches (token) {
  return function (dispatch, getState) {
    dispatch(requestUserSearches(token))
    getSearches(token)
    .then((response) => {
      dispatch(recieveUserSearches(response.data.data))
    })
    .catch((error) => {
      console.log(error)
      dispatch(recieveSearchesError(token))
    })
  }
}

export function setLocation (json) {
  const results = json.results[0]
  return {
    type: RECIEVE_LOCATION,
    isFetching: false,
    geolocation: Object.values(results.geometry.location),
    cityState: [results.address_components[1].short_name, results.address_components[4].short_name].join(', ')
  }
}
export function requestLocation (zipcode) {
  return {
    type: REQUEST_LOCATION,
    isFetching: true,
    zipcode
  }
}
export function recieveLocation (json, options) {
  const geo = Object.values(json.results[0].geometry.location)
  return function (dispatch, getState) {
    dispatch(setLocation(json))
    dispatch(getWeatherData(geo, options))
  }
}
export function recieveLocationError (locationError) {
  return {
    type: RECIEVE_LOCATION_ERROR,
    isFetching: false,
    zipecode: '',
    errorMsg: 'Invalid Zipcode',
    err: true
  }
}
export function resolveLocationError () {
  return {
    type: RESOLVE_LOCATION_ERROR,
    errorMsg: '',
    err: false
  }
}

export function getLocationData (zipcode, token = '') {
  const options = [zipcode]
  if (token.length > 1) {
    options.push(token)
  }
  return function (dispatch, getState) {
    dispatch(requestLocation(zipcode))
    getGeocoding(zipcode)
    .then((response) => {
      if (response.data.results.length === 0) {
        dispatch(recieveLocationError(response.data.status))
      } else {
        dispatch(recieveLocation(response.data, options))
      }
    })
    .catch((error) => {
      dispatch(recieveLocationError(error))
    })
  }
}
