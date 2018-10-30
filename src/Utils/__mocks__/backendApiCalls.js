import { mockArtists, mockArtist2 } from '../mockData';

export const signUpPostRequest = jest.fn();

export const logInPostRequest = jest.fn();

export const venuePostRequest = jest.fn();

export const getAllUserVunues = jest.fn();

export const artistPostRequest = jest.fn();

export const addWmeArtistsToBackend = jest.fn();

export const addCaaArtistsToBackend = jest.fn();

export const getAllArtists = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockArtists);
});

export const getArtist = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockArtist2);
});

export const offerPostRequest = jest.fn();

export const getAllUserOffers = jest.fn();
