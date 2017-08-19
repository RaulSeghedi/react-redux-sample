import React, {Component} from 'react'
import NavBar from './components/NavBar'
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Manage from './components/Manage';

export default class App extends Component {
    render() {
        return (
            <div>
                <h3>List of movies</h3>
                <hr/>
                <NavBar/>
                <hr/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/manage' component={Manage}/>
                </Switch>
            </div>
        )
    }
}
