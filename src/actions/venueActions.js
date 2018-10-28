import { getMatchingVenue } from '../Utils/songKickApiCalls';
import { venuePostRequest, getAllUserVunues } from '../Utils/backendApiCalls';

// setCurrentVenueState action
export const setCurrentVenueState = venue => ({
  type: 'SET_CURRENT_VENUE_STATE',
  venue
});

// setNewVenue thunk
export const setNewVenue = (venueName, venueCity) => async dispatch => {
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

// setUserVenue thunk
export const setUserVenue = userId => async dispatch => {
  const userVenues = await getAllUserVunues(userId);
  if (!userVenues.length) {
    throw new Error({
      message: 'Sorry, this user is not associated with any venues'
    });
  }

  dispatch(setCurrentVenueState(userVenues[0]));
  return userVenues[0];
};
