import { userSignUp, userLogIn } from '../Utils/backendApiCalls';
import setAuthToken from '../Utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import isEmpty from '../Utils/isEmpty';

// setCurrentUserState action
export const setCurrentUserState = (user, isAuthenticated) => ({
  type: 'SET_CURRENT_USER_STATE',
  user,
  isAuthenticated
});

// registerUser thunk
export const registerUser = user => async dispatch => {
  const savedUser = await userSignUp(user);

  if (savedUser.id) {
    const { email } = savedUser;
    const userCreds = { buyer: { email, password: user.buyer.password } };
    const loginResponse = await userLogIn(userCreds);
    const { authorization: token } = loginResponse.headers;

    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decoded = jwt_decode(token);

    dispatch(setCurrentUserState(savedUser, !isEmpty(decoded)));
    return savedUser;
  }
};
