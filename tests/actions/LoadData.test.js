
//import your store
import configureStore from '../../src/store/configureStore';

//import your action
import * as LoadDataAction from '../../src/actions/LoadData';


import nock from 'nock';
import  { Map } from 'immutable'

let store = null, scope;

const callerOne = () =>{
	// intercept the superagent request
	nock('http://localhost:3000')
		.get('/data/movie')
		.reply(200, data)
}

const data = {
	response: {
		data: {
      results: []
		}
	},
}

describe('LoadData', () => {
  beforeEach(() => {
		callerOne();
		nock.disableNetConnect();


    // disable logger
    console.log = () => {}
    console.info = () => {}
    console.group = () => {}

    // configure the store
    store = configureStore({});
  })

  it('should load data from action', done =>{

    // dispath the action
    store.dispatch(
      LoadDataAction.loadData()
    )
    // and ..., receive the mocked response
    .then(() => {
      expect(store.getState().LoadData.toJS()).toEqual(data)
      done();
    })

  })

  it('should be a instance of Map object of default action', done =>{

    const data = store.getState().LoadData
    expect(data).toBeInstanceOf(Map)
    done();

  })
})
