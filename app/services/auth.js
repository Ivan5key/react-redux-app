'use strict';
import Http from '../lib/http-request';
import { Promise } from 'async-promise';
import { config } from '../configuration';
import { LocalStore } from '../reducers/local-store';


const authenticationRequest = new Http()
    .Url(config.serverUrl + 'login')
    .Method('GET');

export function authentication(action) {
    let login = action.login;
    let password = action.password;
    let authResponse = authenticationRequest
        .UserAuth(login, password)
        .Exec();
    authResponse.then(
        (success) => {
            let resp = JSON.parse(success);
            if(resp.status == 200) {
                LocalStore.set('token', resp.token);
            }
        }
    );
    return authResponse;
}
