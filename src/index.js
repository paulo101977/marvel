import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { AppRouter } from './router';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <AppRouter /> 
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
