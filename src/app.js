import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'
import todoReducers from './reducers/todoReducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger'


const store = createStore(todoReducers, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);