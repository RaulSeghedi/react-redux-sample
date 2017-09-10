import {combineReducers} from 'redux';
import {moviesReducer} from './moviesList';
import {activeMovieReducer} from "./activeMovie";
import {addMovieReducer} from './addMovie';
import {updateMovieReducer} from './updateMovie';
import {deleteMovieReducer} from './deleteMovie';

const allReducers = combineReducers({
    moviesReducer,
    activeMovieReducer,
    addMovieReducer,
    updateMovieReducer,
    deleteMovieReducer
});

export default allReducers;
