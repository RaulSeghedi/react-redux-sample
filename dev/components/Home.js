import React from 'react';
import MoviesList from '../containers/MovieList';
import MoviesDetails from '../containers/MovieDetails';

const Home = () => {
    return (
        <div>
            <MoviesList/>
            <div>
                <h3>Movie details:</h3>
                <MoviesDetails/>
            </div>
        </div>
    )
};

export default Home;