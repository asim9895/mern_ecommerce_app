import {
  USER_DETAILS_ERROR,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_UPDATE_ERROR,
  USER_UPDATE_REQUEST,
  USER_UPDATE_STATUS,
} from '../constants/userConstants';

const userDetailsReducer = (
  state = { userDetails: null, updateStatus: '' },
  actions
) => {
  switch (actions.type) {
    case USER_DETAILS_REQUEST:
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_DETAILS_ERROR:
    case USER_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: actions.payload,
      };
    case USER_UPDATE_STATUS:
      return {
        ...state,
        loading: false,
        updateStatus: actions.payload,
      };

    default:
      return state;
  }
};

export default userDetailsReducer;
