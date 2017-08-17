import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieList extends Component {

    createItemsList(){
        return this.props.moviesReducer.map((movie)=>{
            return <li key={movie.id} style={{listStyleType: "none"}}>
                <strong>Title: </strong>{movie.title}<br/>
                <strong>Year: </strong> {movie.year}<br/>
                <strong>Description: </strong>{movie.description}<br/><br/>
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

export default connect(mapStateToProps)(MovieList);
