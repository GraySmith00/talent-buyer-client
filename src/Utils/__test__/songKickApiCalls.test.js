import mockAxios from 'axios';
import { getMatchingVenue } from '../songKickApiCalls';
import { mockMatchingVenueResponse } from '../mockData';

describe('getMatchingVenue', () => {
  it('should call axios.get with the correct params', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(mockMatchingVenueResponse)
    );
    getMatchingVenue('ogden', 'denver');
    const url = `https://api.songkick.com/api/3.0/search/venues.json?apikey=undefined&query=ogden%20denver`;

    expect(mockAxios.get).toHaveBeenCalledWith(url);
  });
});
