import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from '../types';


const initialState = {
  userData: null,
  loading: false,
  isAuthSuccess: false,
  errorMessage: '',
};

const handlers = {
  [SIGN_IN_REQUEST]: (state) => ({
    ...state,
    loading: true,
  }),
  [SIGN_IN_SUCCESS]: (state, { id, email }) => ({
    ...state,
    userData: { id, email },
    loading: false,
    isAuthSuccess: true,
  }),
  [SIGN_IN_FAIL]: (state, { error }) => ({
    ...state,
    isAuthSuccess: false,
    errorMessage: error,
    loading: false,
  }),
  DEFAULT: (state) => state,
};

export const userReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
