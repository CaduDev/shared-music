import { combineReducers } from 'redux';

import auth from './auth/reducer';
import feedBack from './feedBack/reducer';

export default combineReducers({
  auth,
  feedBack
});
