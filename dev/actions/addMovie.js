export function addMovie(movie) {
    return (dispatch)=> {
        let data = {id: movie.id, title: movie.title, year: movie.year, description: movie.description};
        fetch("http://localhost:3000/movies", {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json();
            })
            .then(response => {
                dispatch(createMovie(response))
            })
            .catch(err => console.log('error', err));
    }
}

const createMovie = (movie) => {
    return {
        type: 'CREATE_MOVIE',
        payload: movie
    }
};