import Immutable from 'immutable';

import { SET_DATA_SELECTION, EDIT_DATA_SELECTION } from '../actions/Selection';

const seletedRedux = {
	selectedItem: {
    "id": 0,
    "name": "",
    "description": "",
    "modified": "",
    "thumbnail": {
        "path": "",
        "extension": ""
    },
    "comics": {
        "items": [
            {
                "name": ""
            }
        ],
    },
  }
}

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

const searchItem = (items, id) => {
  return items.find( item => item.id === id) || {};
}

const searchByNewFieldsAndEdit = (currentField = [], nFields) => {
  if(nFields && nFields.length > 0){
    nFields.map( field => {
      const { key, value } = field;
      const item = currentField.find( f => f.key === key);

      if(item){
        item.key = key;
        item.value = value;
      } else {
        currentField.push({
          key: key,
          value: value
        })
      }

      return field;
    })

    return currentField || [];
  } else {
    return currentField || []
  }
  
}

const saveOrEditItem = (action) => {
  const { description, fields, id } = action;
  const items = getOrCreateLocalStorageItems();
  const item = searchItem(items, id);

  if(item.id || item.description){
    const nField = searchByNewFieldsAndEdit(item.fields, fields);
    
    item.description = description;
    item.fields = nField;
  } else {
    let obj = {};

    obj.description = description;
    obj.fields = fields;
    obj.id = id;

    items.push(obj);
  }


  localStorage.setItem('characters', JSON.stringify(items));

  return items;
}


let defaultSelected = Immutable.fromJS(seletedRedux)

function appReducer (state = defaultSelected, action) {

  switch ( action.type ) { 
    case SET_DATA_SELECTION:
      return state.mergeDeep({
        selectedItem: action.selectedItem
      })
    case EDIT_DATA_SELECTION:
      saveOrEditItem(action);
      return state;
    default: 
      return state
  }
}

export default appReducer