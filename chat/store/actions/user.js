import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from '../types';

export const signInRequest = (loading) => ({
  type: SIGN_IN_REQUEST,
  payload: loading
});

export const signInSuccess = (name) => ({
  type: SIGN_IN_SUCCESS,
  payload: name
});

export const signInFail = (error) => ({
  type: SIGN_IN_FAIL,
  payload: error
});

export const signIn = (username) => async (dispatch) => {
  dispatch(signInRequest(true));
  try {
    const { name, id } = await fetch('url', { method: 'POST', body: username });
    if (id) {
      dispatch(signInSuccess(name));
      dispatch(signInRequest(false));
    }
  } catch (e) {
    dispatch(signInFail(e));
    dispatch(signInRequest(false));
  }
};
