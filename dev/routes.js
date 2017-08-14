import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import FilmePage from './components/filme/FilmePage';
import FilmPage from './components/filme/FilmPage';
import ManagePage from './components/filme/ManagePage';
import ManageFilmPage from './components/filme/ManageFilmPage';
import ManageNewFilmPage from './components/filme/ManageNewFilmPage';




export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/filme" component={FilmePage}>
            <Route path="/filme/:id" component={FilmPage}/>
        </Route>
        <Route path="/manage" component={ManagePage}>
            <Route path="/manage/new" component={ManageNewFilmPage}/>
            <Route path="/manage/:id" component={ManageFilmPage}/>
        </Route>
    </Route>
);