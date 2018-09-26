import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { AppRouter } from './router';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider  } from 'styled-components';

// TODO: remove this after
const theme = {
    main: "blue"
};

const store = configureStore();

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    </ThemeProvider>, document.getElementById('root')
);
registerServiceWorker();
