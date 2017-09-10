import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteMovie} from '../actions/deleteMovie';

class MovieListForManage extends Component {

    checkUpdateFunction() {
        return console.log('updated movie');
    }

    createItemsList() {
        return this.props.movies.map((movie) => {
            return <li
                key={movie.id}
                style={{listStyleType: "none"}}
            >
                <div>
                    {movie.title}<br/>
                    <button onClick={this.checkUpdateFunction.bind(this)}>UPDATE</button>
                    <button onClick={() => this.props.deleteMovie(movie.id)}>DELETE</button>
                </div>
                <br/>
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
        movies: state.moviesReducer,
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({deleteMovie: deleteMovie}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListForManage);
