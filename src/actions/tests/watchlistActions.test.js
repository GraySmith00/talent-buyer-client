import { mockWatchlist } from '../../Utils/mockData';
import { getUserWatchlist } from '../../Utils/backendApiCalls';
import { setUserWatchlist, populateUserWatchlist } from '../watchlistActions';

jest.mock('../../Utils/backendApiCalls');

describe('watchListActions', () => {
  describe('setUserWatchlist', () => {
    it(
      'should return an object containing a SET_USER_WATCHLIST ' +
        'action and the artist watchlist',
      () => {
        const expectation = {
          type: 'SET_USER_WATCHLIST',
          watchlist: mockWatchlist
        };
        const result = setUserWatchlist(mockWatchlist);
        expect(result).toEqual(expectation);
      }
    );

    describe('populateUserWatchlist', () => {
      let thunk;
      let mockDispatch;

      beforeEach(() => {
        thunk = populateUserWatchlist();
        mockDispatch = jest.fn();
      });

      it('should call getUserWatchlist', async () => {
        await thunk(mockDispatch);
        expect(getUserWatchlist).toHaveBeenCalled();
      });

      it.skip('should dispatch setUserWatchlist if response is ok', async () => {
        await thunk(mockDispatch);
        expect(mockDispatch).toHaveBeenCalledWith(
          setUserWatchlist(mockWatchlist)
        );
      });
    });
  });
});
