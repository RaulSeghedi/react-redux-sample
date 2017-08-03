import * as types from './actionTypes';
import filmeApi from '../api/filmeApi';
export function loadFilmeSuccess(filme) {
    return {type: types.LOAD_FILME_SUCCESS, filme};
}

export function loadFilme() {
    return function (dispatch) {
        return filmeApi.getAllFilme().then(filme => {
            dispatch(loadFilmeSuccess(filme));
        }).catch(error => {
            throw(error);
        });
    };
}