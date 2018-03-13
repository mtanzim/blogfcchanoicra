import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";
export const FETCH_COMMENTS = "fetch_comments";

export const ADD_COMMENTS = "ADD_COMMENTS";

const ROOT_URL = "https://fcchanoiblog-mtanzim.c9users.io/api";
const API_KEY = '';

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

export function addComments(id) {
  const request = axios.post(`${ROOT_URL}/comments?post_id=${id}`);
  console.log('Hi');
  console.log(request);
  return {
    type: ADD_COMMENTS,
    payload: request
  };
}