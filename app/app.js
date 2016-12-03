'use strict';
require('../styles/app.less');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import HandlerView from './routes';
import {store, history} from './reducers';

import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
//const history = syncHistoryWithStore(browserHistory, store);

//syncReduxAndRouter(history, store);

const AppInitial = React.createClass({
    render() {
        return (
            <Provider store={store} dispatch={store.dispatch}>
                <Router history={history} routes={HandlerView} />
            </Provider>
        );
    }
});
ReactDOM.render(<AppInitial />, document.getElementById('root'));
