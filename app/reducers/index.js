'use strict';
import ListReducer from './list-reducer';
import _ from 'lodash';

import { combineReducers, createStore } from 'redux';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(
    combineReducers({
        userState: ListReducer,
        routing: routerReducer
    })
);
console.log(store.getState());
export default store;
