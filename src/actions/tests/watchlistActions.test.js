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
      it.skip('should call the getUserWatchlist method', async () => {
        await populateUserWatchlist();
        await expect(getUserWatchlist()).toBeCalled();
      });
    });
  });
});
