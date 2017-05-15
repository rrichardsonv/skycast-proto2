import { combineReducers } from 'redux'
import usersReducer from './Users/reducers'
import forecastsReducer from './Forecasts/reducers'
import searchesReducer from './Searches/reducers'

const rootReducer = combineReducers({
  usersReducer,
  searchesReducer,
  forecastsReducer
})

export default rootReducer