import { Provider } from 'react-redux'

import React from 'react';
import { shallow , mount } from 'enzyme';
import nock from 'nock';

// import your store
import configureStore from '../../src/store/configureStore';


// connected component
import Home, { HomePage } from '../../src/components/pages/home'

import immutable, { Map } from 'immutable'

import { ThemeProvider } from 'styled-components'


import light from '../../src/stylus/light'

const callerOne = () => {
  nock('https://gateway.marvel.com/v1/')
    .get('/public&apikey=e6b0ab7ad7f9b9663c0c2fa919d7c0d5&hash=3a6390b7bcedcb14e8cb648844de5ea8&ts=1537915949')
    .reply(200, data)
}

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
							]
					},
				},
			]
		}
	},
})

let store = null;

const setup = () =>{
  const props = {
    loadData: jest.fn(),
    data: immutable.fromJS(data).get('response')
  }


  const root = mount(
    <ThemeProvider theme={ light }>
      <HomePage {...props}/>
    </ThemeProvider>
  )

  return {
    props,
    root
  }
}

describe('LoadData Reducer', () => {
  beforeEach(() => {
    // intercept the superagent request
  	 callerOne();

    nock.disableNetConnect();

    // redux store instance
    store = configureStore({})
  })


  it('should test connected component', async done =>{

    const root = shallow(<Home store={store}/>)

    expect(root.props().store.getState().LoadData.toJS()).toEqual({"response": {"data": {"results": []}}})

    done();

  })

})
