import { getMatchingVenue } from '../Utils/songKickApiCalls';

// setCurrentVenueState action
export const setCurrentVenueState = venue => ({
  type: 'SET_CURRENT_VENUE_STATE',
  venue
});

// setCurrentVenue thunk
export const setCurrentVenue = (venueName, venueCity) => async dispatch => {
  const venue = await getMatchingVenue(venueName, venueCity);
  if (!venue) {
    throw new Error({
      message: 'Sorry, no venue with that name was found in that city'
    });
  }
  dispatch(setCurrentVenueState(venue));
  return venue;
};
