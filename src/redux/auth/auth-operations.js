import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://questify-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credential => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/auth/register', credential);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credential => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/auth/login', credential);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  console.log(dispatch);
  try {
    //await axios.post('/auth/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());

  } catch (error) {
    dispatch(authActions.logoutError(error.message));
    console.log(error);
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    //const response = await axios.post('/auth/refresh');

    dispatch(authActions.getCurrentUserSuccess());
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
    //На случай если в локал сторедж остался какой-то токен чтобы его почистить
    dispatch(authActions.logoutSuccess());
  }
};

const authOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser
};

export default authOperations;