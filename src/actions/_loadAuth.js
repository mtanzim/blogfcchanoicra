import axios from "axios";
import { ROOT_URL, API_KEY } from "./index";


export const _loadAuth = (dispatch) => {
  return (nextState, replace, callback) => {
    dispatch(loadAuth())
      .then(() => {
        // callback is like a "next" function, app initialization is stopped until it is called.
        callback();
      });
  };
}


export const LOGIN_REFRESH = 'LOGIN_REFRESH'
export function loadAuth () {
  const request = axios.get(`${ROOT_URL}/readSession${API_KEY}`, { withCredentials: true })
  return {
    type: LOGIN_REFRESH,
    payload: request
  }

}