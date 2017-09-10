import React, {Component} from 'react';
import {connect} from 'react-redux';

class UpdateMovie extends Component {
    render() {

        return (
            <div>
                <div>
                    <h6>Title</h6>
                    <input id="updateTitle" type='text' size='48' ref='titleRef'/>

                    <h6>Year</h6>
                    <input type='number' size='48'/>

                    <h6>Description</h6>
                    <textarea cols='50' rows='5'/>
                    <br/>
                    <button>Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movie: state.moviesReducer,
        updateMovie: state.updateMovieReducer
    }
};

export default connect(mapStateToProps)(UpdateMovie);
