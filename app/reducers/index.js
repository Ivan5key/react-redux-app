'use strict';
import ListReducer from './list-reducer';
import _ from 'lodash';

import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({
    usersState: ListReducer
});

const store = createStore(reducers);

export default store;
