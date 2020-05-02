import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST
} from '../types';
import { Http } from '../../utils/http';


const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
});

const signInSuccess = (id, email) => ({
  type: SIGN_IN_SUCCESS,
  id,
  email,
});

const signInFail = (error) => ({
  type: SIGN_IN_FAIL,
  error,
});

export const signIn = (email, password) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const result = await Http.post('http://localhost:8000/auth/login', { email, password });
    if (result.id) { dispatch(signInSuccess(result.id, result.email)); }
    if (result.error) { dispatch(signInFail(result.error.message)); }
  } catch (e) {
    dispatch(signInFail());
  }
};

export const signUp = (username) => async (dispatch) => {
  try {
    const data = await fetch('http://localhost:8000/auth/signup', { method: 'POST', body: username });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
