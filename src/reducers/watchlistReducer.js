export const watchlistReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ARTIST_TO_WATCHLIST':
      return action.artist;
    default:
      return state;
  }
};