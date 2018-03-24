import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const EDIT_POST = "EDIT_POST";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

export const FETCH_COMMENTS = "fetch_comments";
export const ADD_COMMENTS = "ADD_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";
export const EDIT_COMMENT = "EDIT_COMMENT";

//require('dotenv').config()

//const ROOT_URL = "http://localhost:8080/api";
export const ROOT_URL = process.env.REACT_APP_API_ADDRESS;
//const ROOT_URL=''
export const API_KEY = '';

console.log(process.env.REACT_APP_API_ADDRESS);

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function editPost(id, values) {
  const request = axios
    .put(`${ROOT_URL}/posts/${id}${API_KEY}`, values)
    //.then(() => callback());

  //console.log(request);
  return {
    type: EDIT_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}



export function fetchComments(id) {
  const request = axios.get(`${ROOT_URL}/comments?post_id=${id}`);

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


export function addComments(id, newComment) {
  //update this to use redux-form values!!!
  const request = axios.post(`${ROOT_URL}/comments?post_id=${id}`,
                              {comment_content:newComment, comment_authorID:'testUser', comment_postID:id});
  //console.log('Hi');
  //console.log(request);
  return {
    type: ADD_COMMENTS,
    payload: request
  };
}

export function deleteComments(id) {
  const request = axios
    .delete(`${ROOT_URL}/comments/${id}`)
    //.then(() => callback());

  return {
    type: DELETE_COMMENT,
    payload: id
  };
}

export function editComment(id, content) {
  const request = axios
    .put(`${ROOT_URL}/comments/${id}`,
    {content:content})
  //console.log(request)
  return {
    type: EDIT_COMMENT,
    payload: request
  };
}