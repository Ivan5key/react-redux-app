'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, DefaultRoute, IndexRoute } from 'react-router';

import {
    DDSapp,
    Header,
    List,
    Login
} from './components';

const HandlerView = (
    <Route path="/" component={DDSapp}>
        <Route path="list" component={List} />
    </Route>
);

export default HandlerView;
