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
    city: result.city.displayName,
    state: result.city.state.displayName,
    name: result.displayName,
    zip: result.zip,
    capacity: result.capacity
  };
  return venue;
};
