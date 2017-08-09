import * as types from './actionTypes';
import filmeApi from '../api/filmeApi';
export function loadFilmeSuccess(filme) {
    return {type: types.LOAD_FILME_SUCCESS, filme};
}
export function updateFilmSuccess(film) {
    return {type: types.UPDATE_FILM_SUCCESS, film};
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
export function updateFilm(film) {
    return function (dispatch) {
        return filmeApi.updateFilm(film).then(responseFilm => {
            console.log(responseFilm);
            dispatch(updateFilmSuccess(responseFilm));
        }).catch(error => {
            throw(error);
        });
    };
}