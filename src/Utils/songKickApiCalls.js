export const getMatchingVenue = async (venueName, city) => {
  const url = `https://api.songkick.com/api/3.0/search/venues.json?apikey=${
    process.env.REACT_APP_SONGKICK_KEY
  }&query=${venueName}%20${city}`;

  const response = await fetch(url);
  const data = await response.json();
  if (!data.resultsPage.results.venue) {
    return `Sorry no venue was found with the name ${venueName} in ${city}`;
  }
  const result = data.resultsPage.results.venue[0];
  const venue = {
    street_address: result.street,
    city: result.city.displayName,
    state: result.city.state.displayName,
    name: result.displayName,
    zip: parseInt(result.zip, 10),
    capacity: result.capacity,
    venue_songkick_id: result.id
  };
  return venue;
};

export const getArtistInfo = async (artistName, agency) => {
  const url = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${
    process.env.REACT_APP_SONGKICK_KEY
  }&query=${artistName}`;

  const response = await fetch(url);
  const data = await response.json();

  const spotifyInfo = await getSpotifyInfo(artistName);

  if (spotifyInfo) {
    return {
      name: artistName,
      agency: agency,
      songkick_id: data.resultsPage.results.artist[0].id,
      ...spotifyInfo
    };
  }
};

export const getSpotifyInfo = async artistName => {
  const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
  const response = await fetch(url, {
    headers: {
      Authorization: 'Bearer ' + process.env.REACT_APP_SPOTIFY_BEARER
    }
  });
  const data = await response.json();
  if (data.artists.items) {
    const result = data.artists.items[0];

    const spotifyInfo = {
      name: result.name,
      image_url: result.images[0].url,
      popularity: result.popularity,
      spotify_followers: result.followers.total,
      spotify_url: result.external_urls.spotify,
      spotify_id: result.id,
      genres: result.genres.join(', ')
    };

    return spotifyInfo;
  }
};

//retreive artist details from lastfm
export const getArtistDetails = async artistName => {
  const name = await formatName(artistName);
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${
    process.env.REACT_APP_LASTFM_API
  }&format=json`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

//format name to account for spaces
export const formatName = name => {
  const split = name.split('');
  const newName = split.map(character => {
    return character.replace(' ', '+');
  });
  return newName.join('');
};
