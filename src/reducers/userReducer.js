export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER_STATE':
      return action.user;
    default:
      return state;
  }
};
