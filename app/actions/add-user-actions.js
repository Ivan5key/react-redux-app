'use strict';
import {constants} from '../constants';
import {store} from '../reducers';
import Http from '../lib/http-request';

const itemActions = {
    logIn(action) {
        var request = new Http()
        .UserAuth('ROOT','ROOT')
        .Url('http://localhost:5001/login')
        .Method('GET')
        //.jsonBody(action)
        .Exec();
        store.dispatch({
            type: constants.ADD,
            user: action
        });
    },
    addItem(action) {
        console.log(action);
        store.dispatch({
            type: constants.ADD,
            user: action
        });
    },
    deleteItem(action) {
        store.dispatch({
            type: constants.DELETE,
            id: action
        });
    },
    clear(){
        store.dispatch({
            type: constants.CLEAR
        });
    }
};
export default itemActions;
