class FilmeApi {
    static getAllFilme() {
        return fetch('http://localhost:3000/movies').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    };
    // static updateFilm(film) {
    //     console.log(film);
    //     const request = new Request(`http://localhost:3000/movies/${film.id}`, {
    //         method: 'PUT',
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         }),
    //         body: JSON.stringify({film: film})
    //     });
    // }
    static updateFilm(film) {
        return fetch('http://localhost:3000/movies/' + film.id, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify({film: film}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
    }
}
export default FilmeApi;