import { combineReducers } from 'redux'
import users from './Users/reducers'
import forecasts from './Forecasts/reducers'
import searches from './Searches/reducers'

const rootReducer = combineReducers({
  users,
  searches,
  forecasts
})

export default rootReducer