import {loadMovies} from './loadMovies';

export function deleteMovie(id) {
    return (dispatch) => {
        fetch('http://localhost:3000/movies/' + id, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => {
                return response.json()
            })
            .then((response) => {
                dispatch(eraseMovie(response));
                console.log("filmul sters are id: ", id);
                dispatch(loadMovies())
            })
            .catch(err => console.log('You have an error', err))
    };
}

const eraseMovie = (id) => {
    return {
        type: 'DELETE_MOVIE',
        id
    }
};
