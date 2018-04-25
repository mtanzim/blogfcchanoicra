import axios from "axios";
import { ROOT_URL, API_KEY } from "./index";


export const REFRESH_FAILED = 'REFRESH_FAILED'
//requires thunk
export const refreshFailed = (err) => {
  return {
    type: REFRESH_FAILED,
    err: err
  }
}


export const REFRESH_SUCCESS = 'REFRESH_SUCCESS'
//requires thunk
export const refreshSuccess = (res) => {
  return {
    type: REFRESH_SUCCESS,
    payload: res
  }
}

//requires thunk
export const LOGIN_REFRESH = 'LOGIN_REFRESH'
export const loadAuth = (dispatch) => {
  console.log('refreshing auth')
  const request = axios.get(`${ROOT_URL}/readSession${API_KEY}`, { withCredentials: true })
  return dispatch => {
    dispatch({
      type: LOGIN_REFRESH,
    })
    return request
      .then(res => {
        dispatch(refreshSuccess(res));
      })
      .catch(err => {
        dispatch(refreshFailed(err));
      })
  }
}