//action to add artist to watchlist
export const addArtistToWatchlistAction = artist => ({
  type: 'ADD_ARTIST_TO_WATCHLIST',
  artist
});

//thunk to add artist to watchlist, take in an artist object

export const AddNewArtistToWatchlist = (artist) => async dispatch => {
  console.log(artist);
}


//watchlist reducer, add to root

//call thunk in artistindex