'use strict';
require('../styles/app.less');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import HandlerView from './routes';
import store from './reducers';

const history = syncHistoryWithStore(browserHistory, store);

const AppInitial = React.createClass({
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    {HandlerView}
                </Router>
            </Provider>
        );
    }
});
ReactDOM.render(<AppInitial />, document.getElementById('root'));
