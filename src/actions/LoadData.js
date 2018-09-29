import { CALL_API, CHAIN_API } from './../middleware/api'

export const GET_DATA_SUCCESS = Symbol('GET_DATA_SUCCESS')
export const GET_DATA_FAIL = Symbol('GET_DATA_FAIL')


export function loadData(){
  return (dispatch, getState) => {
    //const Data = getState().Data

    const url = 'characters'

    return dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'get',
                path: url,
                successType: GET_DATA_SUCCESS,
                errorType: GET_DATA_FAIL
              }
            }
          }
        ]
    })
  }
}