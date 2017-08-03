import React, { Component } from 'react'
import MovieList from './containers/MovieList';
import NavBar from './components/NavBar'

export default class App extends Component {
    render() {
        return (
            <div>
                <h3>List of movies</h3>
                <hr/>
                <NavBar/>
                <hr/>
                <MovieList/>
            </div>
        )
    }
}
