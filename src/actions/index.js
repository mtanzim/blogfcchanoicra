import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POST = "fetch_post";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILED = "FETCH_POST_FAILED";
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED";
export const EDIT_POST = "EDIT_POST";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

export const FETCH_COMMENTS = "fetch_comments";
export const ADD_COMMENTS = "ADD_COMMENTS";
export const ADD_COMMENT_FAILED = 'ADD_COMMENT_FAILED';
export const DELETE_COMMENT = "DELETE_COMMENT";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";
export const EDIT_COMMENT = "EDIT_COMMENT";

export const ADD_ERR = "ADD_ERR";
export const CLEAR_ERR = "CLEAR_ERR";
 


let root_url = process.env.REACT_APP_API_ADDRESS;
if (process.env.REACT_APP_NODE_ENV === 'production') {
  console.log('REACT in production!')
  root_url = '/api/';
}

export const ROOT_URL = root_url;

export const API_KEY = '';

// console.log(process.env.REACT_APP_API_ADDRESS);

// In the future, remove the callback structure to use async code in the components themselves (see createPost)

console.log(process.env.REACT_APP_NODE_ENV);
console.log(ROOT_URL);

export function clearErr(){
  return {
    type: CLEAR_ERR,
  }
}

export function addErr(err='Default err') {
  return {
    type: ADD_ERR,
    payload: err
  };
}

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`, { withCredentials: true });
  return {
    type: FETCH_POSTS,
    payload: request
  }
}


export function createPost(values) {
  // , { withCredentials: true }
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values, { withCredentials: true })

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function editPost(id, values) {
  const request = axios
    .put(`${ROOT_URL}/posts/${id}${API_KEY}`, values, { withCredentials: true })
  //.then(() => callback());

  //console.log(request);
  return {
    type: EDIT_POST,
    payload: request
  };
}


export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`, { withCredentials: true });
  return {
    type: FETCH_POST, 
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { withCredentials: true })
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}



export function fetchComments(id) {
  const request = axios.get(`${ROOT_URL}/comments?post_id=${id}`, { withCredentials: true });

  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}


export function clearComments() {
  return {
    type: CLEAR_COMMENTS
  };
}


export function addComments(id, newComment, authorID, authorName) {
  //update this to use redux-form values!!!
  let request = axios.post(`${ROOT_URL}/comments?post_id=${id}`,
    { comment_content: newComment, comment_authorID: authorID, comment_authorName: authorName, comment_postID: id },
    { withCredentials: true });

  return {
    type: ADD_COMMENTS,
    payload: request
  }
}

export function deleteComments(id) {
  const request = axios
    .delete(`${ROOT_URL}/comments/${id}`, { withCredentials: true })

  return {
    type: DELETE_COMMENT,
    payload: id
  };
}

export function editComment(id, content) {
  const request = axios
    .put(`${ROOT_URL}/comments/${id}`,
      { content: content }, { withCredentials: true })
  //console.log(request)
  return {
    type: EDIT_COMMENT,
    payload: request
  };
}