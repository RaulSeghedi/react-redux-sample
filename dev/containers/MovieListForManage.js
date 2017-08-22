import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieListForManage extends Component {

    checkFunction(){
        return console.log('updated movie');
    }

    checkFunction2(){
        return console.log('deleted movie');
    }


    createItemsList() {
        return this.props.moviesReducer.map((movie) => {
            return <li
                key={movie.id}
                style={{listStyleType: "none"}}
            >
                <div>
                    {movie.title}<br/>
                    {movie.year}<br/>
                    {movie.description}<br/>
                    <button onClick={this.checkFunction.bind(this)}>UPDATE</button>
                    <button onClick={this.checkFunction2.bind(this)}>DELETE</button>
                </div><br/>
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


export default connect(mapStateToProps)(MovieListForManage);
