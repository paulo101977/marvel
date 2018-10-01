import { Provider } from 'react-redux'

import React from 'react';
import enzime, { shallow , mount } from 'enzyme';
import nock from 'nock';

// import your store
import configureStore from '../../app/store/configureStore';

// import your reducer
import appReducer from '../../app/reducers/LoadData';
import { GET_DATA_SUCCESS } from '../../app/actions/LoadData'

// connected component
import OiPlayWithConnect, { OiPlay } from '../../app/containers/pages/OiPlay'

import immutable, { Map } from 'immutable'

import { ThemeProvider } from 'styled-components'


import { MinhaOi } from '../../app/styles/themes/MinhaOi'

const callerOne = () => {
  nock('http://localhost:3000')
    .get('/data/movie')
    .reply(200, data)
}

const data = {
	response: {
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
	},
}

let store = null;

const setup = () =>{
  const props = {
    loadData: jest.fn(),
    data: immutable.fromJS(data).get("response").get("data")
  }


  const root = mount(
    <ThemeProvider theme={ MinhaOi }>
      <OiPlay {...props}/>
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

  afterEach( () => {

  })

  it('should test connected component', async done =>{

    const root = shallow(<OiPlayWithConnect store={store}/>)

    expect(root.props().store.getState().LoadData.toJS()).toEqual(data)

    done();

  })


  it('should test unconnected component mock data', async done =>{

    const { root , props }  = setup()


    // loadData is called one time at component mount
    expect(props.loadData.mock.calls.length).toBe(1)

    // call loadData()
    root.children('OiPlay').instance().props.loadData()

    // check if it is called one more time
    expect(props.loadData.mock.calls.length).toBe(2)

    done();

  })


})
