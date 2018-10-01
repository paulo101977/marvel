
//import your store
import configureStore from '../../app/store/configureStore';

//import your reducer
import appReducer from '../../app/reducers/LoadData';
import { GET_DATA_SUCCESS } from '../../app/actions/LoadData'


import immutable, { Map } from 'immutable'

const data = immutable.fromJS({
		data: {
			longSynopsis: '',
	    title: '',
	    rating: '',
	    primaryGenre: '',
			children: [{
					children: [
						{
							title: '',
							mediumSynopsis: '',
							furnitureBaseUrl: '',
							furniture: [
								{uri: ''},
								{uri: ''},
								{uri: ''},
								{uri: ''}
							]
						}
					]
			}]
		}
})

describe('LoadData Reducer', () => {
  beforeEach(() => {

  })

  afterEach( () => {

  })

  it('should test default reducer state', async done =>{

    expect(appReducer(undefined, {}).get("response")).toEqual(data)

    done();

  })

  it('should test action type', async done =>{

    const payload = {type: GET_DATA_SUCCESS, response: data}

    expect( appReducer(undefined, payload).get("response") )
    .toEqual(data)

    done();

  })

})
