import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, USER_REQUEST, USER_SUCCESS, USER_FAILURE } from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
  users: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case USER_REQUEST:
      return { ...state, isLoading: true };
    case USER_SUCCESS:
      return { ...state, isLoading: false, users: payload, isAuth: true };
    case USER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
