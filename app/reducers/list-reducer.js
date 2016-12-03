'use strict';
import _ from 'lodash';
import {constants} from '../constants';

export default function users(state, action) {
    switch (action.type) {
        case constants.ADD:
            return _.assign({}, state, action.user);
        case constants.DELETE:
            return _.remove(state, (item) => {
                    return item.id == action.id;
                });
        case constants.CLEAR:
            return state;
        default:
            return state;
    }
}
