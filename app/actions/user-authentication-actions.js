'use strict';
import _ from 'lodash';

import {constants} from '../constants';
import {store} from '../reducers';
import Http from '../lib/http-request';
import {config} from '../configuration';

import ChangeLocation from './location-change-action';

import { Promise } from 'async-promise';
import { authentication } from '../services/auth'
import ActionCreator from '../lib/action-creator';

const userAuth = new ActionCreator({
    login: {
        type: constants.USER_AUTH,
        service: authentication,
        successType: constants.USER_AUTH_SUCCESS,
        failType: constants.USER_AUTH_FAIL
    }
});
/*
const userAuth = {
    logIn(action) {

        let login = action.login;
        let password = action.password;

        var request = logInRequest.UserAuth(login, password).Exec();
        return request.then(response => {
            storeDispatch(response);
        });

        //function storeDispatch(response) {
        //    let resp = JSON.parse(response);
            store.dispatch({
                type: constants.USER_AUTH,
                auth: authentication(action),
                successType: constants.USER_AUTH_SUCCESS,
                failType: constants.USER_AUTH_FAIL
            });
        //};
    }
};
*/
export default userAuth;
