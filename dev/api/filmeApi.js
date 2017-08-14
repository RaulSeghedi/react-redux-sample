class FilmeApi {
    // static getAllFilme() {
    //     return fetch('http://localhost:3000/movies').then(response => {
    //         return response.json();
    //     }).catch(error => {
    //         return error;
    //     });
    // };
    static getAllFilme() {
        const request = new Request(`http://localhost:3000/movies`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        });

        return fetch(request).then(response => {
          return response.json();
        }).catch(error => {
          return error;
        });
    }
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

    // static updateFilm(film) {
    //     let data = {id:film.id, title: film.title, year: film.year, description: film.description, poster: film.poster, trailer:film.trailer};
    //     return fetch('http://localhost:3000/movies/' + film.id, {
    //     method: 'PUT',
    //     mode: 'CORS',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(res => {
    //     return res;
    // }).catch(err => err);
    // }
    static updateFilm(film) {
        let data = {id:film.id, title: film.title, year: film.year, description: film.description, poster: film.poster, trailer:film.trailer};
        const request = new Request(`http://localhost:3000/movies/${film.id}`, {
          method: 'PUT',
          mode: 'CORS',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(data)
        });
        return fetch(request).then(response => {
          return response.json();
        }).catch(error => {
          return error;
        });
    }
    static createFilm(film) {
        let data = {id:film.id, title: film.title, year: film.year, description: film.description, poster: film.poster, trailer:film.trailer};
        const request = new Request('http://localhost:3000/movies/', {
          method: 'POST',
          mode: 'CORS',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(data)
        });
        return fetch(request).then(response => {
          return response.json();
        }).catch(error => {
          return error;
        });
    }
    static deleteFilm(film) {
      const request = new Request(`http://localhost:3000/movies/${film.id}`, {
        method: 'DELETE'
      });
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
}
export default FilmeApi;