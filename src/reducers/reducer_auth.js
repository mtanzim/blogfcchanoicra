import { SIGNUP_USER, LOGIN_USER } from "../actions/auth";

//auth reducer
const defaultAuth = {
  authenticated: false,
  fetching:false,
  user:{},
  isLogin:true,
  err: ''
}

export default function authReducer(state = defaultAuth, action) {
    switch (action.type) {
        case LOGIN_USER:
          console.log(action.payload)
          return action.payload.data;
        case SIGNUP_USER:
          console.log(action.payload)
          return action.payload.data;
        default:
            return state;
    }
}