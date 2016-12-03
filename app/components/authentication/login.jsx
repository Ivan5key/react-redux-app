'use strict';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { routeActions, routerReducer, push } from 'react-router-redux';
import _ from 'lodash';

import Hashing from '../../lib/hashing';
import {store} from '../../reducers';
import { LocalStore } from '../../reducers/local-store';

import actions from '../../actions/user-authentication-actions';
import ChangeLocation from '../../actions/location-change-action';

const LoginForm = React.createClass({
    getInitialState() {
        return {
            loginValidate: /\W/, // letter, numbers, symbol: '_'
            error: null,
            isVisible: false,
            authStatus: null
        };
    },
    show() {
        this.setState({isVisible: true});
    },
    close() {
        this.setState({
            isVisible: false,
            error: null,
            authStatus: null
        });
    },
    componentWillMount() {
        store.subscribe(() => {
            let state = store.getState();
            if(state.userLogin.response && state.userLogin.response.status == 200) {
                this.setState({isVisible: false});
            } else {
                this.setState({authStatus: 'Invalid login or password!'});
            }
        });
    },
    handleSubmit() {
        event.preventDefault();
        event.stopPropagation();
        this.setState({authStatus: null});
        let {actionName} = this.props;
        let login = this.refs.login.value;
        let password = this.refs.password.value;

        let isValid = this.handleValidation(login, password);

        if(isValid){
            login = Hashing.sha256(login);
            password = Hashing.sha256(password);
            actions.login({login, password});
        }
    },
    handleValidation(login, password){
        let isValidLogin = false;
        let isValidPassword = false;

        if(!_.isEmpty(login)) {
            if(login.length >= 4) {
                if(!this.state.loginValidate.test(login)) {
                    isValidLogin = true;
                } else {
                    this.setState({error: "Possible characters: a-Z and '_'"});
                }
            } else {
                this.setState({error: "Login length minimum 4 symbols"});
            }
        } else {
            this.setState({error: "Enter login!"});
        }
        if(!_.isEmpty(password)) {
            if(password.length >= 6) {
                isValidPassword = true;
            } else {
                this.setState({error: "Password length minimum 6 symbols"});
            }
        } else {
            this.setState({error: "Enter password!"});
        }

        return (isValidLogin && isValidPassword) ? true : false;
    },
    handleChangeLogin() {
        let login = this.refs.login.value;
        if(this.state.loginValidate.test(login)) {
            this.setState({error: "Possible characters: a-Z and '_'"});
        } else {
            this.setState({error: ""});
        }
        if(login.length < 4) {
            this.setState({error: "Login length minimum 4 symbols"});
        } else {
            this.setState({error: ""});
        }
    },
    handleChangePassword() {
        let password = this.refs.password.value;
        let login = this.refs.login.value;
        if(login.length < 4) {
            this.setState({error: "Login length minimum 4 symbols"});
        } else {
            this.setState({error: ""});
        }
    },
    render() {
        let {isVisible} = this.state;
        return  isVisible ? (
            <div className="DDS-login-form">
                <div className="form">
                    <div className="form-header">
                        <div className="header-label">
                            Enter
                        </div>
                        <div className="header-buttons">
                            <button data-position="right" className="btn" onClick={this.close}>Close</button>
                        </div>
                    </div>
                    <div className="form-body">
                        <form>
                            <span className="input-label"> Login </span>
                            <input className="from-input"
                                name="Login"
                                type="text"
                                ref="login"
                                onChange={this.handleChangeLogin}/>
                            <span className="input-label"> Password </span>
                            <input className="from-input"
                                name="Password"
                                type="password"
                                ref="password"
                                onChange={this.handleChangePassword}/>
                        </form>
                        <span className="error-message">{this.state.authStatus ? this.state.authStatus : this.state.error}</span>
                        <button className="btn-action full" onClick={this.handleSubmit}>LOGIN</button>
                    </div>
                </div>
            </div>
        ) : null;
    }
});
const mapStateToProps = (state, ownProps) => {
    return {
        routing: state.routing,
        userLogin: state.userLogin
    };
};
export const Login = connect(mapStateToProps, null, null, {withRef: true})(LoginForm);
