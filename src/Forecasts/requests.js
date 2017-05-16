import { prepareUrl } from '../globalHelpers'
import axios from 'axios'

const apiKey = {key: process.env.REACT_APP_SKYCAST_API_KEY}

export function postSearch (lat, long, zipcode = '', token = '') {
  const searches = 'searches?'
  var params = [{lat: lat}, {long: long}, {zipcode: zipcode}, {token: token}, apiKey]
  return axios.post(prepareUrl(searches, params))
}