'use strict';
import _ from 'lodash';
import {constants} from '../constants';

export default function users(state = [], action) {
    switch (action.type) {
        case constants.USER_AUTH:
            return action;
            break;
        default:
            return state;
            break;
    }
}
