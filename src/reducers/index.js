import { combineReducers } from 'redux'


import App from './App';
import LoadData from './LoadData';
import Selection from './Selection';

const rootReducer = combineReducers({
  App,
  LoadData,
  Selection
})

export default rootReducer
