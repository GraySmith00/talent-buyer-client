import {
  watchlistPostRequest,
  watchlistDeleteRequest,
  getUserWatchlist
} from '../Utils/backendApiCalls';

//action to add artist to watchlist
export const setUserWatchlist = watchlist => ({
  type: 'SET_USER_WATCHLIST',
  watchlist
});

// populate user watchlist
export const populateUserWatchlist = () => async dispatch => {
  const response = await getUserWatchlist();
  if (response.status === 200) {
    console.log(response.data);
    dispatch(setUserWatchlist(response.data));
  }
};

//thunk to add artist to watchlist, take in an artist object

export const toggleArtistThunk = ({ artist, watchlist }) => async dispatch => {
  const alreadyWatched = watchlist.find(band => band.id === artist.id);

  let newWatchlist;

  if (alreadyWatched) {
    newWatchlist = watchlist.filter(band => band.id !== artist.id);
    await watchlistDeleteRequest(artist.id);
  } else {
    newWatchlist = [...watchlist, artist];
    await watchlistPostRequest(artist.id);
  }
  dispatch(setUserWatchlist(newWatchlist));
  return artist;
};
