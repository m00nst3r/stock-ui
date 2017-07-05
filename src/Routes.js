import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from './app/App'
import Login from './app/Login'

const routers = (
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/login" component={Login}/>
    </Router>
);

export default routers;