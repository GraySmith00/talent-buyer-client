import axios from 'axios';

export const getMatchingVenue = async (venueName, city) => {
  try {
    const url = `https://api.songkick.com/api/3.0/search/venues.json?apikey=${
      process.env.REACT_APP_SONGKICK_KEY
    }&query=${venueName}%20${city}`;

    const response = await axios.get(url);
    const { data } = response;

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
  } catch (error) {
    throw new Error(
      `Sorry no venue was found with the name ${venueName} in ${city}`
    );
  }
};

export const getArtistInfo = async (artistName, agency) => {
  const url = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${
    process.env.REACT_APP_SONGKICK_KEY
  }&query=${artistName}`;

  const response = await fetch(url);
  const data = await response.json();

  const spotifyInfo = await getSpotifyInfo(artistName);
  const songkick_id = data.resultsPage.results.artist[0].id;

  if (spotifyInfo) {
    return {
      name: artistName,
      agency: agency,
      songkick_id,
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

//fetch concerts at current venue by artist
export const getEventHistory = async (artistId, venue, name) => {
  const url = `https://api.songkick.com/api/3.0/artists/${artistId}/gigography.json?apikey=${
    process.env.REACT_APP_SONGKICK_KEY
  }&order=desc`;
  const response = await fetch(url);
  const eventData = await response.json();
  const eventMatches = await cleanEvents(eventData, venue, name);
  return eventMatches;
};

//clean events
export const cleanEvents = async (events, venue, name) => {
  const venueCity = venue.city;
  const allArchivedEvents = events.resultsPage.results.event;
  const matches = allArchivedEvents.filter(
    event => event.location.city.split(',')[0] === venueCity
  );
  const formattedEvents = await formatEvents(matches, name);
  const matchObject = { venueCity, events: formattedEvents };
  return matchObject;
};

//format event array
export const formatEvents = (events, name) => {
  const formattedEvents = events.reduce((formattedEvents, event) => {
    const billMatch = event.performance.find(
      event => event.displayName === name
    );

    const newEvent = {
      eventName: event.displayName,
      venue: event.venue,
      billing: billMatch.billing,
      date: event.start.date
    };

    formattedEvents.push(newEvent);
    return formattedEvents;
  }, []);
  return formattedEvents;
};
