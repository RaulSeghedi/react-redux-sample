export function loadMovies() {
    return (dispatch) => {
        fetch("http://localhost:3000/movies", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
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

const getMovies = movie => {
    return {
        type: 'LOAD_MOVIES',
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

