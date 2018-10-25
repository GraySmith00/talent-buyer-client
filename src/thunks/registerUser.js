import { setCurrentUserState } from '../actions/userActions';
import { userSignUp } from '../Utils/backendApiCalls';

export const registerUser = user => async dispatch => {
  const savedUser = await userSignUp(user);
  dispatch(setCurrentUserState(savedUser));
};
