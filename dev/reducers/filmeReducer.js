import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function catReducer(state = initialState.filme, action) {
    switch (action.type) {
        case types.LOAD_FILME_SUCCESS:
            return action.filme;
        case types.UPDATE_FILM_SUCCESS:
        return [
            ...state.filter(film => film.id !== action.film.id),
            Object.assign({}, action.film)
        ];
        default:
            return state;
    }
}