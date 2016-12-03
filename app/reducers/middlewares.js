'use strict';
import { browserHistory } from 'react-router';

import {constants} from '../constants';

export const redirect = store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type == constants.LOCATION_CHANGE) {
      console.log(action);
      browserHistory[action.payload.method](action.payload.nextUrl);
  }
  return next(action)
}
