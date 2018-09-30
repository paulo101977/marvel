
export const SET_DATA_SELECTION = Symbol('SET_DATA_SELECTION');


export function setItemSelected(selectedItem) {
    return {
      type: SET_DATA_SELECTION,
      selectedItem
    }
  }