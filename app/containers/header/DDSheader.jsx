'use strict';

import React from 'react';
import Router, { Link, browserHistory } from 'react-router';
import _ from 'lodash';

const DDSheader = React.createClass({
    render() {
        return (
            <div className="DDS-header">
                <ul className="nav-menu">
                    <li>
                        <Link to="/list"> About </Link>
                    </li>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/"> Contacts </Link>
                    </li>
                    <li>
                        <Link to="/"> Shop </Link>
                    </li>
                    <li className="log-in-btn">
                        <Link to="/login">Log In</Link>
                    </li>
                </ul>
            </div>
        );
    }
});

export default DDSheader;
