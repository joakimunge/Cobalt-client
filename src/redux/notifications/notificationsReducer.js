import {
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAIL
} from "../signup/constants";
import {
  REQUEST_SESSION_SUCCESS,
  REQUEST_SESSION_FAIL,
  REQUEST_DELETE_SESSION_SUCCESS
} from "../session/constants";
import {
  REQUEST_LOGOUT_SUCCESS,
  REQUEST_LOGOUT_FAIL,
  REQUEST_AUTH_FAIL,
  REQUEST_AUTH_SUCCESS
} from "../auth/constants";
import {
  ADD_MEMBER_SUCCESS,
  ADD_MEMBER_ERROR,
  REMOVE_MEMBER_SUCCESS,
  REMOVE_MEMBER_ERROR
} from "../workspace/constants";
import { REMOVE_OLD_NOTIFICATION } from "./constants";
import {
  REQUEST_AVATAR_UPDATE_SUCCESS,
  REQUEST_AVATAR_UPDATE_FAIL,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAIL
} from "../user/constants";

const initialState = {
  messages: [],
  counter: 0
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SIGNUP_SUCCESS:
    case REQUEST_SIGNUP_FAIL:
    case REQUEST_SESSION_SUCCESS:
    case REQUEST_DELETE_SESSION_SUCCESS:
    case REQUEST_SESSION_FAIL:
    case ADD_MEMBER_ERROR:
    case ADD_MEMBER_SUCCESS:
    case REMOVE_MEMBER_SUCCESS:
    case REMOVE_MEMBER_ERROR:
    case REQUEST_LOGOUT_SUCCESS:
    case REQUEST_LOGOUT_FAIL:
    case REQUEST_AVATAR_UPDATE_SUCCESS:
    case REQUEST_AVATAR_UPDATE_FAIL:
    case REQUEST_USER_SUCCESS:
    case REQUEST_USER_FAIL:
    case REQUEST_AUTH_FAIL:
    case REQUEST_AUTH_SUCCESS:
      return {
        ...state,
        messages: [
          ...state.messages,
          Object.assign({}, action.payload.message, { id: state.counter })
        ],
        counter: state.counter + 1
      };
    case REMOVE_OLD_NOTIFICATION:
      return {
        ...state,
        messages: state.messages.filter(i => i.id !== action.payload)
      };
    default:
      return state;
  }
};

export default notificationsReducer;
