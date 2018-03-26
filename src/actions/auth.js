import axios from "axios";
import { ROOT_URL, API_KEY } from "./index";
//fake async action with timeout
export const SIGNUP_USER ='SIGNUP_USER'
export const signupUser = (values) => {
  const { username, password, email } = values;
  console.log(values);
  const request = axios.post(`${ROOT_URL}/users${API_KEY}`, values)
  return {
    type: SIGNUP_USER,
    payload: request
  };
}

//this needs to be examined in the backend, there is currently no user authentication
export const LOGIN_USER ='LOGIN_USER'
export const loginUser = (values) => {
  const { username, password, email } = values;
  console.log(values);
  const request = axios.get(`${ROOT_URL}/users${API_KEY}`, values)
  return {
    type: LOGIN_USER,
    payload: request
  };
}
