import { setCurrentVenueState } from '../actions/venueActions';
import { getMatchingVenue } from '../Utils/songKickApiCalls';

export const setCurrentVenue = (venueName, venueCity) => async dispatch => {
  const venue = await getMatchingVenue(venueName, venueCity);
  dispatch(setCurrentVenueState(venue));
};