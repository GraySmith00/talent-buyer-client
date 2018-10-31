export const venueReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_VENUE_STATE':
      return action.venue;

    default:
      return state;
  }
};
