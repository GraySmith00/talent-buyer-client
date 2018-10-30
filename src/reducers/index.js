import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { venueReducer } from './venueReducer';
import { offerReducer } from './offerReducer';
import { watchlistReducer } from './watchlistReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  currentVenue: venueReducer,
  offers: offerReducer,
  watchlist: watchlistReducer
});

export default rootReducer;
