import axios from "axios";
import { ROOT_URL, API_KEY } from "./index";
//fake async action with timeout
export const SIGNUP_USER ='SIGNUP_USER'
export const signupUser = (values) => {
  //const { username, password, email } = values;
  //console.log(values);
  const request = axios.post(`${ROOT_URL}/users${API_KEY}`, values)
  return {
    type: SIGNUP_USER,
    payload: request
  };
}

export const LOGOUT_USER = 'LOGOUT_USER'
export const logoutUser = (values) => {
  //const { username, password, email } = values;
  //console.log(values);
  const request = axios.get(`${ROOT_URL}/logout${API_KEY}`)
  return {
    type: LOGOUT_USER,
    payload: request
  };
}


export const LOGIN_FAILED = 'LOGIN_FAILED'
//requires thunk
export const loginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    err: err
  }
}


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
//requires thunk
export const loginSuccess = (res) => {
  return {
    type: LOGIN_SUCCESS,
    payload: res
  }
}

//requires thunk
export const LOGIN_USER ='LOGIN_USER'
export const loginUser = (values) => {
  //const { username, password, email } = values;
  //console.log(values);
  const request = axios.post(`${ROOT_URL}/auth${API_KEY}`, values)
  return dispatch => {
    dispatch({
      type: LOGIN_USER,
    })
    return request
    .then( res => {
        dispatch(loginSuccess(res));
    })
    .catch (err => {
      dispatch (loginFailed(err));
    })
  }
}
