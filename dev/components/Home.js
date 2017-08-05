import React, {Component} from 'react';
import MoviesList from '../containers/MovieList';

class Home extends Component {
    render() {
        return (
            <div>
                <MoviesList/>
            </div>
        )
    }
}

export default Home;