'use strict';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createHistory } from 'history';
import { syncHistory, routerReducer, syncHistoryWithStore } from 'react-router-redux';
import {browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import ListReducer from './list-reducer';
import UserAuthReducer from './user-authentication-reducer';
import {redirect} from './middlewares';

const appReducers = combineReducers({
    userLogin: UserAuthReducer,
    //userState: ListReducer,
    routing: routerReducer
});

export const store = createStore(
    appReducers,
    applyMiddleware(
        thunkMiddleware,
        redirect        
    )
);

export const history = syncHistoryWithStore(browserHistory, store);
//reduxRouterMiddleware.listenForReplays(store);

// Dispatch the initial action
//store.dispatch(requestAuthInfo());
