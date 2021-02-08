import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        userInfo: actions.payload,
      };

    case USER_LOGIN_ERROR:
    case USER_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };

    case USER_LOGOUT:
      return {
        ...state,
        loading: false,
        error: null,
        userInfo: null,
      };

    default:
      return state;
  }
};

export default userReducer;
