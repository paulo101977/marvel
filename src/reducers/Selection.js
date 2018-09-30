import Immutable from 'immutable';

import { SET_DATA_SELECTION } from '../actions/Selection';

const seletedRedux = {
	selectedItem: null,
}

let defaultSelected = Immutable.fromJS(seletedRedux)

function appReducer (state = defaultSelected, action) {

  switch ( action.type ) { 
    case SET_DATA_SELECTION:
      return state.merge({
        selectedItem: action.selectedItem
      })
  	
	default: 
		return state
	}
}

export default appReducer