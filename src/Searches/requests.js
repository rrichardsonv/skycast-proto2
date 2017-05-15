import { prepareUrl } from '../globalHelpers'
import axios from 'axios'

const apiKey = {key: '99e6fa12fbff'}

// RECENT USER SEARCHES
export function getSearches (token) {
  const searches = 'searches?'
  var params = [{token}, apiKey]
  return axios.get(prepareUrl(searches, params))
}
export function getGeocoding (zipcode) {
  const googleKey = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBaxDnDSHYtYRWHYtsmfJYazlGSCjYwHrg&components=postal_code:'
  return axios.get(googleKey + zipcode)
}