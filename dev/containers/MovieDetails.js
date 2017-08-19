import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetails extends Component {
    render() {
        if (!this.props.activeMovie){
            return <p>Select a movie for more details ...</p>
        }
        return (
            <div>
                <div>
                    <strong>Title - </strong>{this.props.activeMovie.title}
                </div>
                <div>
                    <strong>Year - </strong>{this.props.activeMovie.year}
                </div>
                <div>
                    <strong>Description - </strong>{this.props.activeMovie.description}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeMovie: state.activeMovieReducer
    }
};

export default connect(mapStateToProps)(MovieDetails);