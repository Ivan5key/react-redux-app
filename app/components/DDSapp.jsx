'use strict';

import React, { Component, PropTypes } from 'react';

import Header from './header/header';

const DDSapp = React.createClass({
    render() {
      return (
          <div>
              <Header />
              {this.props.children}
          </div>
       );
   },
});

export default DDSapp;

//export {Header};
