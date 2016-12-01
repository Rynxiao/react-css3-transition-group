/**
 * Created by ryn on 2016/9/5.
 */

'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Provider, connect } from 'react-redux';

import Home from './home';
import About from './about';
import Me from './me';
import Layout from './layout';

import store from './redux/transitionStore';

import './style.css';

const App = React.createClass({
    render () {
        return (
            <div>{this.props.children}</div>
        );
    }
});


const routes = {
    path: '/',
    component: Layout,
    indexRoute: { component: Home },
    childRoutes: [
        { path: 'about', component: About },
        { path: 'me', component: Me }
    ]
}

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('container')
)