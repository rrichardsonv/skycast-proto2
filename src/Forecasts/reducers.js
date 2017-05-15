import { REQUEST_WEATHER, RECIEVE_WEATHER, RECIEVE_WEATHER_ERROR, RESOLVE_WEATHER_ERROR } from './actions'

const DEFAULT_STATE = {
    isFetching: false,
    currently: {},
    hourly: {},
    daily: {},
    err: false,
    errorMsg: ''
}
const requestWeather = (state, action) => {
  const newForecasts = {}
  Object.assign(newForecasts, state.forecasts, {
    isFetching: action.isFetching
  })
  const newState = {}
  Object.assign(newState, state, {forecasts: newForecasts})
  return newState
}
const recieveWeather = (state, action) => {
  const newForecasts = {}
  Object.assign(newForecasts, state.forecasts, {
    isFetching: action.isFetching,
    currently: action.currently,
    hourly: action.hourly,
    daily: action.daily
  })
  const newState = {}
  Object.assign(newState, state, {forecasts: newForecasts})
  return newState
}
const recieveWeatherError = (state, action) => {
  const newForecasts = {}
  Object.assign(newForecasts, state.forecasts, {
    isFetching: action.isFetching,
    err: action.err,
    errorMsg: action.errorMsg
  })
  const newState = {}
  Object.assign(newState, state, {forecasts: newForecasts})
  return newState
}
const resolveWeatherError = (state, action) => {
  const newForecasts = {}
  Object.assign(newForecasts, state.forecasts, {
    err: action.err,
    errorMsg: action.errorMsg
  })
  const newState = {}
  Object.assign(newState, state, {forecasts: newForecasts})
  return newState
}


const forecasts = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case REQUEST_WEATHER:
      return requestWeather(state, action)
    case RECIEVE_WEATHER:
      return recieveWeather(state, action)
    case RECIEVE_WEATHER_ERROR:
      return recieveWeatherError(state, action)
    case RESOLVE_WEATHER_ERROR:
      return resolveWeatherError(state, action)
    default:
      return state
  }
}

export default forecasts
