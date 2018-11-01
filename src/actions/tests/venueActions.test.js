import { mockVenue } from '../../Utils/mockData';
import {
  setCurrentVenueState,
  setNewVenue,
  setUserVenue
} from '../venueActions';
import { getMatchingVenue } from '../../Utils/songKickApiCalls';
import {
  venuePostRequest,
  getAllUserVenues
} from '../../Utils/backendApiCalls';

jest.mock('../../Utils/songKickApiCalls');
jest.mock('../../Utils/backendApiCalls');

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

  describe('setNewVenue', () => {
    let mockDispatch;
    let thunk;

    beforeEach(() => {
      thunk = setNewVenue();
      mockDispatch = jest.fn();
    });

    it('should call getMatchingVenue', async () => {
      await thunk(mockDispatch);
      expect(getMatchingVenue).toHaveBeenCalled();
    });

    it('should call venuePostRequest', async () => {
      await thunk(mockDispatch);
      expect(venuePostRequest).toHaveBeenCalled();
    });

    it('should dispatch setCurrentVenueState if response was ok', async () => {
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(
        setCurrentVenueState(mockVenue)
      );
    });
  });

  describe('setUserVenue', () => {
    let mockDispatch;
    let thunk;

    beforeEach(() => {
      thunk = setUserVenue();
      mockDispatch = jest.fn();
    });

    it('should call getAllUserVenues', async () => {
      await thunk(mockDispatch);
      expect(getAllUserVenues).toHaveBeenCalled();
    });

    it('should dispatch setCurrentVenueState if response was ok', async () => {
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(
        setCurrentVenueState(mockVenue)
      );
    });
  });
});
