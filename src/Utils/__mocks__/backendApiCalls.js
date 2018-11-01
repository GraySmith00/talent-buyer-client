import {
  mockArtists,
  mockArtist2,
  mockWatchlist,
  mockOffers,
  mockSingleOfferEdited,
  mockSingleOffer,
  mockVenue,
  mockVenues
} from '../mockData';

export const signUpPostRequest = jest.fn();

export const logInPostRequest = jest.fn();

export const venuePostRequest = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockVenue);
});

export const getAllUserVenues = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockVenues);
});

export const artistPostRequest = jest.fn();

export const addWmeArtistsToBackend = jest.fn();

export const addCaaArtistsToBackend = jest.fn();

export const getAllArtists = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockArtists);
});

export const getUserWatchlist = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockWatchlist);
});

export const getArtist = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockArtist2);
});

export const getAllUserOffers = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockOffers);
});

export const offerPutRequest = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockSingleOfferEdited);
});

export const offerPostRequest = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockSingleOffer);
});
