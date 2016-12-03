'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './header/header';
import {store} from '../reducers';

const DDSapp = React.createClass({
    render() {
      return (
        <div className="app" store={store}>
            <Header />
            {this.props.children}
        </div>
       );
   }
});

export default DDSapp;
