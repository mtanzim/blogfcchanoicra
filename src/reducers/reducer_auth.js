import {
  SIGNUP_USER, LOGIN_USER, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_USER, SIGNUP_SUCCESS, SIGNUP_FAILED } from "../actions/auth";

  import {LOGIN_REFRESH} from "../actions/_loadAuth"

//auth reducer
const defaultAuth = {
  authenticated: false,
  fetching: false,
  user: {},
  // isLogin: true,
  err: ''
}

export default function authReducer(state = defaultAuth, action) {
  switch (action.type) {
    case LOGIN_REFRESH:
      return {
        ...state,
        authenticated: true,
        err: '',
        user: action.payload.data
      }
    case LOGIN_FAILED:
      return {
        ...defaultAuth,
        // authenticated:false,
        err: action.err.response.data.message
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated:true,
        err: '',
        user: action.payload.data
      }
    case LOGIN_USER:
      return {
        ...defaultAuth,
        fetching: true
      }
    case LOGOUT_USER:
      return defaultAuth;
    case SIGNUP_USER:
      return {
        ...defaultAuth,
        fetching: true
      }
    case SIGNUP_SUCCESS:
      return {
      ...state,
      authenticated:true,
      err: '',
      user: action.payload.data
    }
    case SIGNUP_FAILED:
      return {
        ...defaultAuth,
        // authenticated:false,
        err: action.err.response.data.message
      }
    default:
      return state;
  }
}