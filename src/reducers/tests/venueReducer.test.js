import { venueReducer } from '../venueReducer';
import { mockVenue } from '../../Utils/mockData';
import { setCurrentVenueState } from '../../actions/venueActions';

describe('venueReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    const result = venueReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set the current venue state', () => {
    expect(venueReducer(undefined, setCurrentVenueState(mockVenue))).toEqual(
      mockVenue
    );
  });
});
