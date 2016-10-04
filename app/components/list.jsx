'use strict';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../reducers';
import actions from '../actions/add-user-actions';
import _ from 'lodash';

const FriendListApp = React.createClass({
    getInitialState(){
        let usersState = store.getState().usersState;
        return {
            usersState
        };
    },
    add() {
        actions.addItem({id: Math.random(),name: 'UserName', number: '555', email: '@mail.com'});
        this.setState({usersState: store.getState().usersState});
    },
    delete(id) {
        actions.deleteItem(id);
        this.setState({usersState: store.getState().usersState});
    },
    clear(){
        actions.clear();
        this.setState({usersState: store.getState().usersState});
    },
    render () {
        return (
            <div className="list">
                <span>The FriendList</span>
                <button onClick={this.add}>Add</button>
                <button onClick={this.clear}>Clear</button>
                {_.map(this.state.usersState, (item,i) => {
                    return (
                        <div className="list-item" key={i}>
                            {item.name}
                            <button onClick={_.partial(this.delete, item.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        );
    }
});

const mapStateToProps = function(store) {
  return {
    users: store.userState
  };
};
export default connect(mapStateToProps)(FriendListApp);
