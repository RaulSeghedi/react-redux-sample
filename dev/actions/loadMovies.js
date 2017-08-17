export const loadMovies = () => {
    return {
        type: 'LOAD_MOVIES',
        payload: new Promise(resolve => {
            setTimeout(() => {
                fetch('http://localhost:3000/movies').then((response) => {
                    resolve(response.json());
                }, 1000)
            })
        })
    }
};
