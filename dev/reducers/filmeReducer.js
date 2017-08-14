import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function catReducer(state = initialState.filme, action) {
    switch (action.type) {
        case types.LOAD_FILME_SUCCESS:
            return action.filme;
        case types.CREATE_FILM_SUCCESS:
        browserHistory.push(`/manage/${action.film.id}`)
        return [
            ...state.filter(film => film.id !== action.film.id),
            Object.assign({}, action.film)
          ]
        case types.UPDATE_FILM_SUCCESS:
        return [
            ...state.filter(film => film.id !== action.film.id),
            Object.assign({}, action.film)
        ];
        case types.DELETE_FILM_SUCCESS: {
          const newState = Object.assign([], state);
          const indexOfFilmToDelete = state.findIndex(film => {
            return film.id == action.film.id
          })
          newState.splice(indexOfFilmToDelete, 1);
          browserHistory.push('/manage');
          return newState;
        }
        default:
            return state;
    }
}