const mockUser = {
  id: 7,
  first_name: 'Michael',
  last_name: 'Jackson',
  email: 'michael@example.com',
  created_at: '2018-10-27T22:15:12.939Z',
  updated_at: '2018-10-27T22:15:12.939Z',
  isAuthenticated: true
};

export const userReducer = (state = mockUser, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER_STATE':
      return action.user;
    default:
      return state;
  }
};
