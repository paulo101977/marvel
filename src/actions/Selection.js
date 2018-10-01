
export const SET_DATA_SELECTION = Symbol('SET_DATA_SELECTION');
export const EDIT_DATA_SELECTION = Symbol('EDIT_DATA_SELECTION');

export function setItemSelected(selectedItem) {
    return {
      type: SET_DATA_SELECTION,
      selectedItem
    }
}

export function editSelected(id, description, fields ) {
  return {
    type: EDIT_DATA_SELECTION,
    id,
    description,
    fields
  }
}