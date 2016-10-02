'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';

import View from './components/view';
import List from './components/list';

const HandlerView =
    <Route path="/" handler={View}>
        <Route path="/list" component={List} />
    </Route>;
export default HandlerView;
