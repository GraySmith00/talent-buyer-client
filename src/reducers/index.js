import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { venueReducer } from './venueReducer';
import { offerReducer } from './offerReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  currentVenue: venueReducer,
  offers: offerReducer
});

export default rootReducer;
