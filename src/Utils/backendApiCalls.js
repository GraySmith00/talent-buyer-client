import axios from 'axios';
import { artistsByAgency } from './artistsByAgency';
import { getArtistInfo } from './songKickApiCalls';

export const userSignUp = async user => {
  const url = `http://localhost:5000/signup`;
  const response = await axios.post(url, user);
  return response.data;
};

export const userLogIn = async userCreds => {
  const url = `http://localhost:5000/login`;
  const response = await axios.post(url, userCreds, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  });
  if (response.status === 200) {
    console.log(response.headers);
    return response.data;
  }
};

export const venuePostRequest = async venue => {
  const url = `http://localhost:5000/api/v1/venues`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(venue),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
};

export const artistPostRequest = async artist => {
  const url = `http://localhost:5000/api/v1/artists`;
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
