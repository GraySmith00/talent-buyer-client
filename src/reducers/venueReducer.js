const mockVenue = {
  id: 1,
  name: 'Ogden Theatre',
  street_address: '935 East Colfax Avenue',
  city: 'Denver',
  state: 'CO',
  zip: 80218,
  capacity: 1600
};

export const venueReducer = (state = mockVenue, action) => {
  switch (action.type) {
    case 'SET_CURRENT_VENUE_STATE':
      return action.venue;

    default:
      return state;
  }
};
