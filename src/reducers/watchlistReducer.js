export const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_WATCHLIST':
      return action.watchlist;
    default:
      return state;
  }
};
