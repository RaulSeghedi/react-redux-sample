export const loadMovies = () => {
    return {
        type: 'LOAD_MOVIES',
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                fetch('http://localhost:3000/movies', {
                    method: 'GET'
                }).then(response => {
                    resolve(response.json());
                    reject(new Error('Eroare !!!'));
                    console.log(response);
                }, 1000)
            })
        })
    }
};

// export const loadMovies = () => {
//     return{
//         type: 'LOAD_MOVIES',
//         payload: new Promise((resolve, reject) => {
//             const request = new Request('http://localhost:3000/movies', {
//                 method: 'GET',
//                 // headers: {'Content-Type': 'application/json'},
//                 // mode: 'cors',
//                 // cache: 'default'
//             });
//
//             fetch(request).then(response => {
//                 return response.json();
//             }).catch(error => {
//                 return console.log('We have an error', error)
//             });
//
//             if (request === true){
//                 resolve(request.response)
//             } else {
//                 reject('Eroare !!!')
//             }
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

// export const loadMovies = () => {
//     return function (dispatch) {
//         return getAllMovies().then(movie => {
//             dispatch({
//                 type: 'LOAD_MOVIES_FULFILLED',
//                 payload: movie
//             });
//         }).catch(error => {
//             throw (error);
//         })
//     }
// };

export const selectMovie = movie => {
    console.log('selected');
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
};
