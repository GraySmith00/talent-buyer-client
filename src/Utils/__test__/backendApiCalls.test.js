import mockAxios from 'axios';
import {
  signUpPostRequest,
  getAllUserVenues,
  logInPostRequest,
  venuePostRequest,
  artistPostRequest,
  getAllArtists
} from '../backendApiCalls';
import {
  mockVenues,
  mockUser,
  mockUserCreds,
  mockLoginResponse,
  mockVenue,
  mockArtist,
  mockArtists
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
    it.skip('should call axios.post with the correct params', () => {
      artistPostRequest(mockArtist);
      expect(mockAxios.post).toHaveBeenCalledWituh(
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
});
