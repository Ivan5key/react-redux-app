'use strict';
import {store} from '../reducers';
import {constants} from '../constants';

const LocationChange = {
    linkTo(link){
        console.log(link);
        store.dispatch({
            type: constants.LOCATION_CHANGE,
            payload: {
                method: 'push',
                nextUrl: link
            }
        });
    }
};

export default LocationChange;
