import Immutable from 'immutable'

import { GET_DATA_SUCCESS } from '../actions/LoadData'


const DataRedux = Immutable.fromJS({
	response: {
		data: {
      results: []
		}
	},
});

let defaultDataState = Immutable.fromJS(DataRedux)

function appReducer (state = defaultDataState, action) {
  switch ( action.type ) {
    case GET_DATA_SUCCESS:
      return state.merge({
        response: action.response,
      })

  	default:
  		return state
	}
}

export default appReducer