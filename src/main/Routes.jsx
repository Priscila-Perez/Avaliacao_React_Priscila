import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../pages/dashboard/Dashboard'

export default props => (
    <Router history={hashHistory}>
        <Route path='/dashboard' component={Dashboard}/>
        <Redirect from='*' to='/dashboard'/>
    </Router>
)