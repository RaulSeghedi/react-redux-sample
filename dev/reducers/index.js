import {combineReducers} from 'redux';
import {moviesReducer} from './moviesList';

const allReducers = combineReducers({
    moviesReducer
});

export default allReducers;
