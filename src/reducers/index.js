import { combineReducers } from 'redux'


import App from './App'
import LoadData from './LoadData'

const rootReducer = combineReducers({
  App,
  LoadData
})

export default rootReducer
