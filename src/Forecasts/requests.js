import { prepareUrl, nestParams } from '../globalHelpers'
import axios from 'axios'

const apiKey = {key: '99e6fa12fbff'}

export function postSearch (lat, long, zipcode = '', token = '') {
  const searches = 'searches?'
  var params = [{lat: lat}, {long: long}, {zipcode: zipcode}, {token: token}, apiKey]
  return axios.post(prepareUrl(searches, params))
}