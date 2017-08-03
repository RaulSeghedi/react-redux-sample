import {combineReducers} from 'redux';
import {movies} from './moviesList';

const allReducers = combineReducers({
    movies
});

export default allReducers;