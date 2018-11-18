import { getMatchingVenue } from '../Utils/songKickApiCalls';
import { venuePostRequest, getAllUserVenues } from '../Utils/backendApiCalls';

// setCurrentVenueState action
export const setCurrentVenueState = venue => ({
  type: 'SET_CURRENT_VENUE_STATE',
  venue
});

// setNewVenue thunk
export const setNewVenue = (venueName, venueCity) => async dispatch => {
  // get venue info from songkick
  const venueInfo = await getMatchingVenue(venueName, venueCity);
  // venue post request
  const savedVenue = await venuePostRequest(venueInfo);
  dispatch(setCurrentVenueState(savedVenue));
  return savedVenue;
};

// setUserVenue thunk
export const setUserVenue = userId => async dispatch => {
  const userVenues = await getAllUserVenues(userId);

  if (!userVenues.length) {
    throw new Error({
      message: 'Sorry, this user is not associated with any venues'
    });
  }

  dispatch(setCurrentVenueState(userVenues[0]));
  return userVenues[0];
};
