export function updateMovie(movie) {
    return (dispatch)=> {
        let data = {id: movie.id, title: movie.title, description: movie.description};
        fetch("http://localhost:3000/movies", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json()
            })
            .then(response => {
            dispatch(changeMovie(response))
        })
            .catch(err => console.log('You have an error', err))
    }
}

const changeMovie = (id) => {
    return {
        type: 'CHANGE_MOVIE',
        payload: id
    }
};
