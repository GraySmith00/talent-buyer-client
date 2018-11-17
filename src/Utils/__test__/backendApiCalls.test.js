import mockAxios from 'axios';
import {
  signUpPostRequest,
  getAllUserVenues,
  logInPostRequest,
  venuePostRequest,
  artistPostRequest,
  getAllArtists,
  getArtist,
  getAllUserOffers,
  offerPutRequest,
  watchlistPostRequest,
  watchlistDeleteRequest,
  getUserWatchlist,
  offerPostRequest
} from '../backendApiCalls';
import {
  mockVenues,
  mockUser,
  mockUserCreds,
  mockLoginResponse,
  mockVenue,
  mockArtist,
  mockArtists,
  mockOffers,
  mockWatchlistPostResponse,
  mockWatchlistDeleteResponse,
  mockWatchlist
} from '../mockData';

describe('BackendApiCalls', () => {
  describe('signUpPostRequest', () => {
    it('should call axios.post with the correct params', () => {
      signUpPostRequest(mockUser);
      expect(mockAxios.post).toHaveBeenCalledWith('undefined/signup', mockUser);
    });
  });

  describe('logInPostRequest', () => {
    it('should call axios.post with the correct params', () => {
      logInPostRequest(mockUserCreds);
      expect(mockAxios.post).toHaveBeenCalledWith(
        'undefined/login',
        mockUserCreds
      );
    });

    it('should return the correct data', async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve(mockLoginResponse)
      );
      const result = await logInPostRequest(mockUserCreds);
      expect(result).toEqual(mockLoginResponse);
    });
  });

  describe('venuePostRequest', () => {
    it('should call axios.post with the correct params', () => {
      venuePostRequest(mockVenue);
      expect(mockAxios.post).toHaveBeenCalledWith(
        'undefined/api/v1/venues',
        mockVenue
      );
    });

    it('should return the correct venue', async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({
          data: mockVenue
        })
      );
      const result = await venuePostRequest(
        'undefined/api/v1/venues',
        mockVenue
      );

      expect(result).toEqual(mockVenue);
    });
  });

  describe('getAllUserVenues', () => {
    it('should call axios.get with the right params', () => {
      getAllUserVenues(1);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith(
        'undefined/api/v1/buyers/1/venues'
      );
    });

    it('should return the correct data', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: mockVenues
        })
      );
      const result = await getAllUserVenues(1);
      expect(result).toEqual(mockVenues);
    });
  });

  describe('artistPostRequest', () => {
    it('should call axios.post with the correct params', () => {
      artistPostRequest(mockArtist);
      expect(mockAxios.post).toHaveBeenCalledWith(
        'undefined/api/v1/artists',
        mockArtist
      );
    });
  });

  describe('getAllArtists', () => {
    it('should call axios.get with the correct params', () => {
      getAllArtists('wme', 'electronic');
      expect(mockAxios.get).toHaveBeenCalledWith('undefined/api/v1/artists');
    });

    it('should return the correct data', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: mockArtists })
      );
      const result = await getAllArtists('wme', 'electronic');
      expect(result).toEqual(mockArtists);
    });
  });

  describe('getArtist', () => {
    it('should call axios.get with the correct params', () => {
      getArtist(1);
      expect(mockAxios.get).toHaveBeenCalledWith('undefined/api/v1/artists/1');
    });

    it('should return the correct data', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: mockArtist
        })
      );

      const result = await getArtist(1);

      expect(result).toEqual(mockArtist);
    });
  });

  describe('offerPostRequest', () => {
    it('should call axios.post with the correct params', () => {
      offerPostRequest(mockOffers[0]);
      const url = 'undefined/api/v1/offers';
      expect(mockAxios.post).toHaveBeenCalledWith(url, mockOffers[0]);
    });

    it('should return the correct data', async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({ data: mockOffers[0] })
      );

      const result = await offerPostRequest(mockOffers[0]);

      expect(result).toEqual(mockOffers[0]);
    });
  });

  describe('getAllUserOffers', () => {
    it('should call axios.get with the correct params', () => {
      getAllUserOffers(1);
      expect(mockAxios.get).toHaveBeenCalledWith(
        'undefined/api/v1/buyers/1/offers'
      );
    });

    it('should return the correct data', () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: mockOffers
        })
      );
    });
  });

  describe('offerPutRequest', () => {
    it('should call axios.put with the correct params', () => {
      offerPutRequest(mockOffers[0]);
      expect(mockAxios.put).toHaveBeenCalledWith(
        'undefined/api/v1/buyers/3/offers/5',
        mockOffers[0]
      );
    });

    it('should return the correct data', async () => {
      mockAxios.put.mockImplementationOnce(() =>
        Promise.resolve({
          data: mockOffers[0]
        })
      );

      const result = await offerPutRequest(
        'undefined/api/v1/buyers/3/offers/5',
        mockOffers[0]
      );

      expect(result).toEqual(mockOffers[0]);
    });
  });

  describe('watchlistPostRequest', () => {
    it('should call axios.post with the correct params', () => {
      watchlistPostRequest(1);
      const url = 'undefined/api/v1/favorite_artists';
      expect(mockAxios.post).toHaveBeenCalledWith(url, { artist_id: 1 });
    });

    it('should return the correct data', async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve(mockWatchlistPostResponse)
      );

      const result = await watchlistPostRequest(10);

      expect(result).toEqual(mockWatchlistPostResponse);
    });
  });

  describe('watchListDeleteRequest', () => {
    it('should call axios.delete with the correct params', () => {
      watchlistDeleteRequest(1);
      const url = 'undefined/api/v1/favorite_artists/1';
      expect(mockAxios.delete).toHaveBeenCalledWith(url);
    });

    it('should return the correct response', async () => {
      mockAxios.delete.mockImplementationOnce(() =>
        Promise.resolve(mockWatchlistDeleteResponse)
      );

      const result = await watchlistDeleteRequest(1);

      expect(result).toEqual(mockWatchlistDeleteResponse);
    });
  });

  describe('getUserWatchlist', () => {
    it('should call axios.get with the correct params', () => {
      getUserWatchlist();
      const url = 'undefined/api/v1/favorite_artists';
      expect(mockAxios.get).toHaveBeenCalledWith(url);
    });

    it('should return the correct response', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: mockWatchlist
        })
      );

      const result = await getUserWatchlist();

      expect(result).toEqual({ data: mockWatchlist });
    });
  });
});
