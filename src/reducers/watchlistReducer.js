export const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ARTIST_ACTION':
      return action.watchlist;
    default:
      return state;
  }
};