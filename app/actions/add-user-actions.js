'use strict';
import * as constants from '../constants';
import store from '../reducers';

const itemActions = {
    addItem(action){
        store.dispatch({
            type: constants.ADD,
            user: action
        });
    },
    deleteItem(action){
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
