import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST
} from '../types';
import { Http } from '../../utils/http';
import { mockAuth } from '../../mock/mockAuth';


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
    // TODO: Заменить моки
    const result = await Http.post('/auth/login', { email: mockAuth.email, password: mockAuth.password });
    if (result.id) { dispatch(signInSuccess(result.id, result.email)); }
    if (result.error) { dispatch(signInFail(result.error.message)); }
  } catch (e) {
    dispatch(signInFail('Something went wrong...'));
  }
};

export const signUp = (username) => async (dispatch) => {
  try {
    const data = await fetch('/auth/signup', { method: 'POST', body: username });
  } catch (e) {
    console.log(e);
  }
};
