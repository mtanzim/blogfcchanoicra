import _ from "lodash";
import { CREATE_POST, FETCH_POSTS, FETCH_POST, DELETE_POST, EDIT_POST, FETCH_POST_FAILED, FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS } from "../actions";

export default function PostsReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case CREATE_POST:
      if (action.payload.data === undefined) return { ...state, err: action.payload.response.data.message};
      return {...state, err:''};
    case EDIT_POST:
      if (action.payload.data === undefined) return { ...state, err: action.payload.response.data.message};
      return { ...state, [action.payload.data._id]: action.payload.data };
    case FETCH_POST:
      if (action.payload.data === undefined) return state;
      return { ...state, [action.payload.data._id]: action.payload.data };
    case FETCH_POSTS:
      if (action.payload.data === undefined) return state;
      return _.mapKeys(action.payload.data.data, "_id");
    case FETCH_POSTS_FAILED:
      console.log(action.err);
      return state
    case FETCH_POST_FAILED:
      console.log(action.err);
      return state
    default:
      return state;
  }
}