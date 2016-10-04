'use strict';
import _ from 'lodash';
import {constants} from '../constants';

export default function users(state, action) {
    switch (action.type) {
        case constants.ADD:
            state.push(action.user);
            break;
        case constants.DELETE:
            _.remove(state, (item) => {
                return item.id == action.id;
            });
            break;
        case constants.CLEAR:
            state = [];
            break;
        default:
            state = [];
    }
    return state;
}
