import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { venueReducer } from './venueReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  currentVenue: venueReducer
});

export default rootReducer;
