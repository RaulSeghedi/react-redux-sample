export function loadMovies() {
    return (dispatch) => {
        fetch("http://localhost:3000/movies", {
            method: 'GET'
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                dispatch(getMovies(res));
            })
            .catch(err => console.log('error ', err));
    }
}

const getMovies = payload => {
    return {
        type: 'LOAD_MOVIES',
        payload
    }
};

export const selectMovie = movie => {
    console.log('selected');
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
};

// export const loadMovies = () => {
//     return {
//         type: 'LOAD_MOVIES',
//         payload: new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 fetch('http://localhost:3000/movies', {
//                     method: 'GET',
//                     headers: {'Content-Type': 'application/json'}
//                 }).then(response => {
//                     resolve(response.json());
//                     reject(new Error('Eroare !!!'));
//                     console.log(response);
//                 }, 1000)
//             })
//         })
//     }
// };

// const getAllMovies = () => {
//     return fetch('http://localhost:3000/movies').then(response => {
//         return response.json();
//     }).catch(error => {
//         return console.log('We have an error ', error);
//     });
// };
//
// export const loadMovies = () => {
//     return function (dispatch) {
//         return getAllMovies().then(movie => {
//             dispatch({
//                 type: 'LOAD_MOVIES',
//                 payload: movie
//             });
//         }).catch(error => {
//             throw (error);
//         })
//     }
// };