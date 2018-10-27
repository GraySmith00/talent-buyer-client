import { userSignUp, userLogIn } from '../Utils/backendApiCalls';

// setCurrentUserState action
export const setCurrentUserState = user => ({
  type: 'SET_CURRENT_USER_STATE',
  user
});

// registerUser thunk
export const registerUser = user => async dispatch => {
  const savedUser = await userSignUp(user);
  if (savedUser.id) {
    const { email } = savedUser;
    const userCreds = { buyer: { email, password: user.buyer.password } };
    await userLogIn(userCreds);
    dispatch(setCurrentUserState(savedUser));
    return savedUser;
  }
};
