import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieList extends Component {

    createItemsList(){
        return this.props.movies.map((movie)=>{
            return <li key={movie.id}>{movie.title}</li>
        })
    }

    render() {
        return (
            <div>
                {this.createItemsList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};

export default connect(mapStateToProps)(MovieList);