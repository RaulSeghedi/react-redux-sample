import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function catReducer(state = initialState.filme, action) {
    switch (action.type) {
        case types.LOAD_FILME_SUCCESS:
            return action.filme;
        default:
            return state;
    }
}