import { signUpPostRequest, logInPostRequest } from '../Utils/backendApiCalls';
import setAxiosAuthHeaders from '../Utils/setAxiosAuthHeaders';
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
  const savedUser = await signUpPostRequest(user);

  if (savedUser.id) {
    const { email } = savedUser;
    const userCreds = { buyer: { email, password: user.buyer.password } };
    const loginResponse = await logInPostRequest(userCreds);
    const { authorization: token } = loginResponse.headers;

    const decoded = setToken(token);

    if (!isEmpty(decoded)) {
      dispatch(
        setCurrentUserState({
          ...savedUser,
          isAuthenticated: !isEmpty(decoded)
        })
      );
      return savedUser;
    }
  }
};

export const logInUser = userCreds => async dispatch => {
  const loginResponse = await logInPostRequest(userCreds);
  const { authorization: token } = loginResponse.headers;

  const decoded = setToken(token);

  if (!isEmpty(decoded)) {
    dispatch(
      setCurrentUserState({
        ...loginResponse.data,
        isAuthenticated: !isEmpty(decoded)
      })
    );
    return loginResponse.data;
  }
};

export const setToken = token => {
  localStorage.setItem('jwtToken', token);
  setAxiosAuthHeaders(token);
  const decoded = jwt_decode(token);
  return decoded;
};
