import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST
} from '../types';
import { Http } from '../../utils/http';


const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
  payload: {
    loading: true
  }
});

const signInSuccess = (name) => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    name,
    loading: false
  }
});

const signInFail = (error) => ({
  type: SIGN_IN_FAIL,
  payload: {
    error,
    loading: false,
  }
});

export const signIn = (email, password) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const data = await Http.post('http://localhost:8000/auth/login', { email, password });
    console.log(data);
    // if (_id) {
    //   dispatch(signInSuccess(data));
    // }
  } catch (e) {
    console.log('err', e)
    dispatch(signInFail(e));
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
