'use strict';
import ListReducer from './list-reducer';
import _ from 'lodash';

import { combineReducers, createStore } from 'redux';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(
    combineReducers({
        usersState: ListReducer,
        routing: routerReducer
    })
);

export default store;
