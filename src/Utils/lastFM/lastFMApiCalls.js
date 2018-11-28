import { lastFMCleaner } from './lastFMCleaner';

//retrieve artist details from lastfm
export const getLastFMInfo = async artistName => {
  const name = await formatName(artistName);
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${
    process.env.REACT_APP_LASTFM_API
  }&format=json`;
  const response = await fetch(url);
  const data = await response.json();
  return lastFMCleaner(data.artist);
};

//format name to account for spaces
export const formatName = name => {
  const split = name.split('');
  const newName = split.map(character => {
    return character.replace(' ', '+');
  });
  return newName.join('');
};
