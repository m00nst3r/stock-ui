import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from './app/App'
import Login from './app/Login'
import Admin from './app/admin/AdminPage'

const routers = (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/a" component={Admin}/>
    </Router>
);

export default routers;