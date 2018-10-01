
//import your store
import configureStore from '../../app/store/configureStore';

//import your action
import * as LoadDataAction from '../../app/actions/LoadData';


import request from 'superagent';
import nock from 'nock';
import immutable, { Map } from 'immutable'

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
								{uri: '/my.png'},
								{uri: ''},
								{uri: ''},
								{uri: '/my2.png'}
							]
						}
					]
			}]
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

  afterEach( () => {

  })

  it('should load data from action', done =>{

    // dispath the action
    store.dispatch(
      LoadDataAction.loadData()
    )
    // and ..., receive the mocked response
    .then(() => {
      expect(store.getState().LoadData.toJS().response).toEqual(data)
      done();
    })

  })

  it('should be a instance of Map object of default action', done =>{

    const data = store.getState().LoadData
    expect(data).toBeInstanceOf(Map)
    done();

  })
})
