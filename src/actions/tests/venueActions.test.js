import { mockVenue } from '../../Utils/mockData';
import { setCurrentVenueState } from '../venueActions';

describe('venueActions', () => {
  describe('setCurrentVenueState', () => {
    it(
      'should set the state with the SET_CURRENT_VENUE_STATE action' +
        'and a venue object',
      () => {
        const expectation = {
          type: 'SET_CURRENT_VENUE_STATE',
          venue: mockVenue
        };

        const result = setCurrentVenueState(mockVenue);
        expect(result).toEqual(expectation);
      }
    );
  });
});
