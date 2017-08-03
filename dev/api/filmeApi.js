class FilmeApi {
    static getAllFilme() {
        return fetch('http://localhost:3000/movies').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    };
}
export default FilmeApi;