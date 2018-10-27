const initialState = {
  isAuthenticated: false,
  user: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER_STATE':
      return {
        ...state,
        user: action.user,
        isAuthenticated: action.isAuthenticated
      };
    default:
      return state;
  }
};
