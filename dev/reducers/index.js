import {combineReducers} from 'redux';
import {moviesReducer} from './moviesList';
import {activeMovieReducer} from "./activeMovie";

const allReducers = combineReducers({
    moviesReducer,
    activeMovieReducer
});

export default allReducers;
