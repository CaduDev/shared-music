import { combineReducers } from 'redux';

import auth from './auth/reducer';
import feedBack from './feedBack/reducer';
import playing from './playing/reducer';

export default combineReducers({
  auth,
  feedBack,
  playing
});
