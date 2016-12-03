'use strict';
import {store} from 'store';

export const LocalStore = {
    set: (item, value) => {
        localStorage.setItem(item, value);
    },
    get: (item) => {
        let data = localStorage.getItem(item);
        return data;
    },
    remove: (item) => {
        localStorage.removeItem(item);
    },
    clear: () => {
        localStorage.clear();
    }
};
