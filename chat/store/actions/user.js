import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from '../types';

export const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
  payload: {
    loading: true
  }
});

export const signInSuccess = (name) => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    name,
    loading: false
  }
});

export const signInFail = (error) => ({
  type: SIGN_IN_FAIL,
  payload: {
    error,
    loading: false,
  }
});

export const signIn = (username) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const { name, id } = await fetch('url', { method: 'POST', body: username });
    if (id) {
      dispatch(signInSuccess(name));
    }
  } catch (e) {
    dispatch(signInFail(e));
  }
};
