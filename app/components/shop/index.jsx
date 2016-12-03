'use strict';

import React from 'react';

const ShopComponent = React.createClass({
    render() {
        return (

        );
    }
});

const mapStateToProps = (state, ownProps) => {
    return {
        routing: state.routing
    };
};
export const Shop = connect(mapStateToProps, null, null, {withRef: true})(ShopComponent);
