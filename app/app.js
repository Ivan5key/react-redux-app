'use strict';
require('../styles/app.less');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import List from './components/list';
import store from './reducers';
//ReactDOM.render(<App />, document.getElementById('root'));

const AppInitial = React.createClass({
    render() {
        return (
          <div>
            <Provider store={store}>
                <List/>
            </Provider>
          </div>
        );
    }
});

ReactDOM.render(<AppInitial />, document.getElementById('root'));
