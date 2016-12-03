'use strict';

import React from 'react';
import Router, { Link, browserHistory } from 'react-router';
import _ from 'lodash';

import {Login} from '../../components/authentication/login';

const DDSheader = React.createClass({
    handleShowWindow() {
        this.refs.loginWindow.getWrappedInstance().show();
    },
    render() {
        return (
            <ul className="nav-menu">
                <Login ref="loginWindow"/>
                <li className="item">
                    <Link to="/list"> About </Link>
                </li>
                <li className="item">
                    <Link to="/"> Home </Link>
                </li>
                <li className="item">
                    <Link to="/"> Contacts </Link>
                </li>
                <li className="item">
                    <Link to="/"> Shop </Link>
                </li>
                <div className="log-in-btn">
                    <button className="btn" onClick={this.handleShowWindow}>
                        Enter
                    </button>
                </div>
            </ul>
        );
    }
});

export default DDSheader;
