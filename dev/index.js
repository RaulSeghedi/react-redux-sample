import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk';
import {loadMovies} from './actions/loadMovies';
import promise from 'redux-promise-middleware'
import logger from 'redux-logger';

const store = createStore(allReducers, applyMiddleware(logger(), promise(), thunk));
store.dispatch(loadMovies());

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
