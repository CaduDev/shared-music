import { combineReducers } from 'redux';

import auth from './auth/reducer';
import feedBack from './feedBack/reducer';
import playing from './playing/reducer';
import controlsSoudBar from './controlsSoudBar/reducer';

export default combineReducers({
  auth,
  feedBack,
  playing,
  controlsSoudBar
});
