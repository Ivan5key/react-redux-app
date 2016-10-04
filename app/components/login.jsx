'use strict';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../reducers';
import actions from '../actions/add-user-actions';
import _ from 'lodash';

export const Login = React.createClass({

    handleSubmit(e){
        event.preventDefault();
        event.stopPropagation();
        var name = this.refs.login.value;
        var password = this.refs.password.value;

        actions.logIn({name, password});
    },

    render () {
        return (
            <div>Login
                <form role="form">
                    <input type="text" ref="login"/>
                    <input type="password" ref="password"/>
                </form>
                <button onClick={(e) => {this.handleSubmit(e)}}>LOGIN</button>
            </div>
        );
    }
});


const mapStateToProps = function(store) {
  return {
    user: store.userState
  };
};
export default connect(mapStateToProps)(Login);
