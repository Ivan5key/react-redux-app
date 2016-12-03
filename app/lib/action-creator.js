'use strict';
import _ from 'lodash';
import { store } from '../reducers';

function newAction(methodName, options) {
    function failRequest(response) {
        store.dispatch({
            type: options.type,
            parameters: options.failType,
            response: JSON.parse(response)
        });
    };
    function successRequest(response) {
        store.dispatch({
            type: options.type,
            parameters: options.successType,
            response: JSON.parse(response)
        });
    };
    return function exec(dispatchData) {
        const service = options.service(dispatchData);
        service.then(
            (success) => {
                successRequest(success);
            },
            (fail) => {
                failRequest(fail);
            }
        );
    };
};

function ActionCreator(actions) {
    _.forEach(actions, (actionParams, key) =>
        Object.defineProperty(
            this,
            key, {
                get: () => newAction.call(this, key, actionParams)
            }
        )
    );
};

export default ActionCreator;
