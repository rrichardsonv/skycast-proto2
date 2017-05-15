import { prepareUrl, nestParams } from '../globalHelpers'
import axios from 'axios'

const apiKey = {key: '99e6fa12fbff'}

// RECENT USER SEARCHES
export function getSearches (token) {
  const searches = 'searches?'
  var params = [{token}, apiKey]
  return axios.get(prepareUrl(searches, params))
}