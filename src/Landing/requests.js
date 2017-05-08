import { prepareUrl, nestParams } from '../globalHelpers'
import axios from 'axios'


const apiKey = {key: '99e6fa12fbff'}
// LOGIN/OUT
export function postLogin (email, password) {
  const sessions = 'sessions?'
  var params = [{email}, {password}, apiKey]
  return axios.post(nestParams(prepareUrl(sessions, params), 'user'))
}
export function deleteLogout (token) {
  const sessions = 'sessions?'
  var params = [{token}].push(apiKey)
  return axios.delete(prepareUrl(sessions, params))
}

// USER CREATION
export function postUser (email, password) {
  const users = 'users?'
  var params = [{email}, {password}, apiKey]
  return axios.post(nestParams(prepareUrl(users, params), 'user'))
}