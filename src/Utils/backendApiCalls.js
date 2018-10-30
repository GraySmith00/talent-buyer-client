import axios from 'axios';
import { artistsByAgency } from './artistsByAgency';
import { getArtistInfo } from './songKickApiCalls';

export const signUpPostRequest = async user => {
  const url = `${process.env.REACT_APP_API}/signup`;
  const response = await axios.post(url, user);
  return response.data;
};

export const logInPostRequest = async userCreds => {
  const url = `${process.env.REACT_APP_API}/login`;
  const response = await axios.post(url, userCreds);
  if (response.status === 200) {
    return response;
  }
};

export const venuePostRequest = async venue => {
  const url = `${process.env.REACT_APP_API}/api/v1/venues`;
  const response = await axios.post(url, venue);
  const data = response.data;
  return data;
};

export const getAllUserVunues = async userId => {
  const url = `${process.env.REACT_APP_API}/api/v1/buyers/${userId}/venues`;
  const response = await axios.get(url);
  const data = response.data;
  return data;
};

export const artistPostRequest = async artist => {
  const url = `${process.env.REACT_APP_API}/api/v1/artists`;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(artist),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const addWmeArtistsToBackend = () => {
  artistsByAgency.WME.map(async artistName => {
    const artistInfo = await getArtistInfo(artistName, 'WME');
    if (artistInfo) {
      await artistPostRequest(artistInfo);
    }
  });
};

export const addCaaArtistsToBackend = () => {
  artistsByAgency.CAA.map(async artistName => {
    const artistInfo = await getArtistInfo(artistName, 'CAA');
    if (artistInfo) {
      await artistPostRequest(artistInfo);
    }
  });
};

export const getAllArtists = async () => {
  const url = `${process.env.REACT_APP_API}/api/v1/artists`;
  const artists = await axios.get(url);
  return artists.data;
};

export const getArtist = async id => {
  const url = `${process.env.REACT_APP_API}/api/v1/artists/${id}`;
  const artist = await axios.get(url);
  return artist.data;
};

export const offerPostRequest = async offer => {
  const url = `${process.env.REACT_APP_API}/api/v1/offers`;
  const savedOffer = await axios.post(url, offer);
  return savedOffer.data;
};

export const getAllUserOffers = async userId => {
  const url = `${process.env.REACT_APP_API}/api/v1/buyers/${userId}/offers`;
  const response = await axios.get(url);
  return response.data;
};

export const offerPutRequest = async offer => {
  const url = `${process.env.REACT_APP_API}/api/v1/buyers/${
    offer.buyer_id
  }/offers/${offer.id}`;
  const response = await axios.put(url, offer);
  return response.data;
};

export const watchlistPostRequest = async artistId => {
  const url = `${process.env.REACT_APP_API}/api/v1/favorite_artists`;
  const response = await axios.post(url, { artist_id: artistId });
  return response;
};

export const watchlistDeleteRequest = async artistId => {
  const url = `${
    process.env.REACT_APP_API
  }/api/v1/favorite_artists/${artistId}`;
  const response = await axios.delete(url);
  return response;
};

export const getUserWatchlist = async () => {
  const url = `${process.env.REACT_APP_API}/api/v1/favorite_artists`;
  const response = await axios.get(url);
  return response;
};
