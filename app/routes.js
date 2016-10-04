'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, DefaultRoute, IndexRoute } from 'react-router';

import {List} from './components';
import {DDSapp} from './components';
import {Header} from './components';
import {Login} from './components';

const HandlerView =
    <Route path="/" component={DDSapp}>
        <Route path="list" component={List} />
        <Route path="login" component={Login} />
    </Route>;

export default HandlerView;
