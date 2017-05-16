import { prepareUrl } from '../globalHelpers'
import axios from 'axios'

const apiKey = {key: process.env.REACT_APP_SKYCAST_API_KEY}
const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY

// RECENT USER SEARCHES
export function getSearches (token) {
  const searches = 'searches?'
  var params = [{token}, apiKey]
  return axios.get(prepareUrl(searches, params))
}
export function getGeocoding (zipcode) {
  var googleGet = "https://maps.googleapis.com/maps/api/geocode/json?key=" + googleApiKey + "&components=postal_code:"
  return axios.get(googleGet + zipcode)
}