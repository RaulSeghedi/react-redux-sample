import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectMovie} from "../actions/loadMovies";

class MovieList extends Component {

    createItemsList() {
        return this.props.moviesReducer.map((movie) => {
            return <li
                key={movie.id}
                style={{listStyleType: "none"}}
                onClick={() => this.props.selectMovie(movie)}
            >
                {movie.title}<br/>
            </li>
        });
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
        moviesReducer: state.moviesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({selectMovie: selectMovie}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
