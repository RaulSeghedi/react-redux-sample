import * as types from './actionTypes';
import filmeApi from '../api/filmeApi';
export function loadFilmeSuccess(filme) {
    return {type: types.LOAD_FILME_SUCCESS, filme};
}
export function createFilmSuccess(film) {  
  return {type: types.CREATE_FILM_SUCCESS, film}
}
export function updateFilmSuccess(film) {
    return {type: types.UPDATE_FILM_SUCCESS, film};
}
export function deleteFilmSuccess(film) {  
  return {type: types.DELETE_FILM_SUCCESS, film}
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
            dispatch(updateFilmSuccess(responseFilm));
        }).catch(error => {
            throw(error);
        });
    };
}
export function createFilm(film) {  
  return function (dispatch) {
    return filmeApi.createFilm(film).then(responseFilm => {
      dispatch(createFilmSuccess(responseFilm));
      return responseFilm;
    }).catch(error => {
      throw(error);
    });
  };
}
export function deleteFilm(film) {  
  return function(dispatch) {
    return filmeApi.deleteFilm(film).then(() => {
      console.log(`Deleted ${film.id}`)
      dispatch(deleteFilmSuccess(film));
      return;
    }).catch(error => {
      throw(error);
    })
  };
}