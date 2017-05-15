import { REQUEST_WEATHER, RECIEVE_WEATHER, RECIEVE_WEATHER_ERROR, RESOLVE_WEATHER_ERROR } from './actions'
import { postSearch } from './requests'

export function requestWeather (geolocation) {
  return {
    type: REQUEST_WEATHER,
    isFetching: true
  }
}
export function recieveWeather (json) {
  const currently = json.currently
  const hourly = json.hourly
  const daily = json.daily
  return {
    type: RECIEVE_WEATHER,
    isFetching: false,
    currently,
    hourly,
    daily
  }
}
export function recieveWeatherError (weatherError) {
  return {
    type: RECIEVE_WEATHER_ERROR,
    isFetching: false,
    errorMsg: 'Forecast not found',
    err: true
  }
}
export function resolveWeatherError () {
  return {
    type: RESOLVE_WEATHER_ERROR,
    errorMsg: '',
    err: false
  }
}
export function getWeatherData (geolocation, options) {
  return function (dispatch, getState) {
    let request = []
    if (options.length > 0) {
      request = geolocation.concat(options)
    } else {
      request = geolocation
    }
    dispatch(requestWeather(geolocation))
    postSearch(...request)
    .then((response) => {
      if (response.data.data) {
        dispatch(recieveWeather(response.data.data))
      } else {
        dispatch(recieveWeatherError(response))
      }
    })
    .catch((error) => {
      dispatch(recieveWeatherError(error))
    })
  }
}