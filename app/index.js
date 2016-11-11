import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import App from './modules/App';
import Login from './modules/Login';
import Dashboard from './modules/Dashboard';

render((
    <Router history={hashHistory} componet>
        <Route path="/login" component={Login}/>
        <Route path="/" component={App}>
            <Route path="/dashboard" component={Dashboard}/>
        </Route>
    </Router>
    ), document.getElementById('app'));
