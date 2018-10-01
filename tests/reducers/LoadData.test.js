
//import your store
import configureStore from '../../src/store/configureStore';

//import your reducer
import appReducer from '../../src/reducers/LoadData';
import { GET_DATA_SUCCESS } from '../../src/actions/LoadData'


import immutable, { Map } from 'immutable'

const dataEmpty = immutable.fromJS({
	response: {
		data: {
			results: []
		}
	}
});

const data = immutable.fromJS({
	response: {
		data: {
      results: [
				{
					"id": 1011334,
					"name": "3-D Man",
					"description": "Blablabla",
					"thumbnail": {
							"path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
							"extension": "jpg"
					},
					"comics": {
							"items": [
									{
											"resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
											"name": "Avengers: The Initiative (2007) #14"
									},
									{
											"resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
											"name": "Marvel Premiere (1972) #37"
									}
							],
							"returned": 12
					},
				},
			]
		}
	},
})

describe('LoadData Reducer', () => {
  it('should test default reducer state', async done =>{

    expect(appReducer(undefined, {})).toEqual(dataEmpty)

    done();

  })

  it('should test action type', async done =>{

    const payload = {type: GET_DATA_SUCCESS, response: data}

    expect( appReducer(undefined, payload).get("response") )
    .toEqual(data)

    done();

  })

})
