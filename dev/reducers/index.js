import {combineReducers} from 'redux';
import {moviesReducer} from './moviesList';
import {activeMovieReducer} from "./activeMovie";
import {addMovieReducer} from './addMovie';

const allReducers = combineReducers({
    moviesReducer,
    activeMovieReducer,
    addMovieReducer
});

export default allReducers;
