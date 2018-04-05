import { SIGNUP_USER, LOGIN_USER, LOGIN_FAILED, LOGIN_SUCCESS } from "../actions/auth";

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
    case LOGIN_FAILED:
      return {
        ...defaultAuth,
        authenticated:false,
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
    // case `${LOGIN_USER}_REJECTED`:
    //   return {
    //     ...defaultAuth,
    //     authenticated: false,
    //     user: {},
    //     err: action.payload.data.response.message
    //   }

      //return action.payload.data
    // case `${LOGIN_USER}_FULFILLED`:
    //   console.log('auth reducer')
    //   console.log(action.payload.data)
    //   return action.payload.data
    // case `${LOGIN_USER}_REJECTED`:
    //   console.log(action.payload)
    //   console.log('REJECTED!!!!!!!!!!!')
    //   console.log(action.payload.response.data.error.message)
    //   return {...defaultAuth, err:action.payload.response.data.error.message};
    case SIGNUP_USER:
      return action.payload.data;
    default:
      return state;
  }
}