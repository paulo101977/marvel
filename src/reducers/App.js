import Immutable from 'immutable';

import { LOADDING_ON, LOADDING_OFF, UPDATE_THEME } from '../actions';
import light from '../stylus/light'

const UserRedux = {
	loadding: false,
	theme: light
}

let defaultUserState = Immutable.fromJS(UserRedux)

function appReducer (state = defaultUserState, action) {

  switch ( action.type ) { 
    case LOADDING_ON:
      return state.merge({
        loadding:true,
      })
  	case LOADDING_OFF:
  		return state.merge({
  			loadding:false,
			})
		case UPDATE_THEME:
			return state.merge({
				theme: action.theme,
			})
  	
	default: 
		return state
	}
}

export default appReducer