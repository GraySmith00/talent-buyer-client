import { userSignUp } from '../Utils/backendApiCalls';

// setCurrentUserState action
export const setCurrentUserState = user => ({
  type: 'SET_CURRENT_USER_STATE',
  user
});

// registerUser thunk
export const registerUser = user => async dispatch => {
  const savedUser = await userSignUp(user);
  dispatch(setCurrentUserState(savedUser));
  return savedUser;
};
