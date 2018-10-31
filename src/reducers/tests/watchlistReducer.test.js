import { watchlistReducer } from '../watchlistReducer';
import { setUserWatchlist } from '../../actions/watchlistActions';
import { mockArtist } from '../../Utils/mockData';

describe('watchlistReducer', () => {
  it('should return the intial state', () => {
    const expected = [];

    const result = watchlistReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return a watchlist array with an artist added', () => {
    expect(watchlistReducer(undefined, setUserWatchlist(mockArtist))).toEqual(
      mockArtist
    );
  });
});
