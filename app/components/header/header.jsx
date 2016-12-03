'use strict';

import React from 'react';
import Router, {Navigation} from 'react-router';
import {DDSheader} from '../../containers/header';

const Header = React.createClass({
    render() {
        return (
            <div className="DDS-header">
                <DDSheader />
            </div>
        );
    }
});

export default Header;
