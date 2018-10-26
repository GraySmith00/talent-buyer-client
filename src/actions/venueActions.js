import { getMatchingVenue } from '../Utils/songKickApiCalls';
import { venuePostRequest } from '../Utils/backendApiCalls';

// setCurrentVenueState action
export const setCurrentVenueState = venue => ({
  type: 'SET_CURRENT_VENUE_STATE',
  venue
});

// setCurrentVenue thunk
export const setCurrentVenue = (venueName, venueCity) => async dispatch => {
  // get venue info from songkick
  const venueInfo = await getMatchingVenue(venueName, venueCity);
  if (!venueInfo) {
    throw new Error({
      message: 'Sorry, no venue with that name was found in that city'
    });
  }

  // venue post request
  const savedVenue = await venuePostRequest(venueInfo);

  dispatch(setCurrentVenueState(savedVenue));
  return savedVenue;
};
