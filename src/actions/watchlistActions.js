//action to add artist to watchlist
export const toggleArtistAction = watchlist => ({
  type: 'TOGGLE_ARTIST_ACTION',
  watchlist
});

//thunk to add artist to watchlist, take in an artist object

export const toggleArtistThunk = ({ artist, watchlist }) => async dispatch => {
  const alreadyWatched = watchlist.find(band => band.id === artist.id);

  let newWatchlist;

  if (alreadyWatched) {
    newWatchlist = watchlist.filter(band => band.id !== artist.id);
  } else {
    newWatchlist = [...watchlist, artist];
  }
  dispatch(toggleArtistAction(newWatchlist));
  return artist;
};
