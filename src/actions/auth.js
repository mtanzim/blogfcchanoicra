import axios from "axios";
import { ROOT_URL, API_KEY } from "./index";
//fake async action with timeout
export const SIGNUP_USER ='SIGNUP_USER'
export const signupUser = (values) => {
  const { username, password, email } = values;
  console.log(values);
  const request = axios.post(`${ROOT_URL}${API_KEY}`, values)
  return {
    type: SIGNUP_USER,
    payload: request
  };
}

//this needs to be examined in the backend, there is currently no user authentication
export const loginUser = (values) => {
  const { username, password, email } = values;
  console.log(values);
  const request = axios.get(`${ROOT_URL}${API_KEY}`, values)
  return {
    type: SIGNUP_USER,
    payload: request
  };
}

/*   //console.log(authRoute);
  return (dispatch) => {
    dispatch(loggingUserIn(user));
    //axios login
    return axios({
      method: 'post',
      url: authRoute,
      data: user
    }).then(res => {
      //console.log(res.data.content);
      dispatch(loggedin(res.data.content));
    }).catch(err => {
      dispatch(loginFailed(user, err.response.data.error, isLogin));
    });
  }
}; */