import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  UPDATE_USER_DATA,
} from "../constants/userConstants";

const initialState = {
  user: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case UPDATE_USER_DATA:
      state = {
        ...state,
        user: action.payload,
      };
      break;

    case USER_LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
      break;

    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }

  return state;
};

export default UserReducer;
