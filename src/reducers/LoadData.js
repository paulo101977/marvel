import Immutable from 'immutable'

import { GET_DATA_SUCCESS } from '../actions/LoadData'


const DataRedux = Immutable.fromJS({
	response: {
		data: {
      results: []
		}
	},
});

const getOrCreateLocalStorageItems = () => {
  let items = localStorage.getItem('characters');

  if(items) {
    return JSON.parse(items);
  } else {
    localStorage.setItem('characters', JSON.stringify([]));
    items = [];
  }

  return items;
}

const retrieveComics = (comics, fields) => {
	if(fields && comics && comics.items){
		fields.map(item => {
			const comicItem = comics.items[item.key];
			if(comicItem){
				comicItem.name = item.value;
			}
		})
	}

	return comics;
}

const mergeWithLocalStorage = (response) => {
  const items = getOrCreateLocalStorageItems();
  let temp = {};
  let data = [];

  if(!items ){
    return response;
  } 
  if(items && items.length === 0){
    return response;
  }
  else {
    Object.assign(temp, response);

		if(response.data){
			data = temp.data.results;

			items.map( item => {
				const finded = data.find( i => i.id === item.id);

				if(finded){
					const comics = finded.comics;

					finded.description = item.description;
					finded.comics = retrieveComics(comics, item.fields)
				}
			});
		}

    return temp;
  }
}

let defaultDataState = Immutable.fromJS(DataRedux)

function appReducer (state = defaultDataState, action) {
  switch ( action.type ) {
    case GET_DATA_SUCCESS:
      return state.merge({
        response: mergeWithLocalStorage(action.response),
      })

  	default:
  		return state
	}
}

export default appReducer