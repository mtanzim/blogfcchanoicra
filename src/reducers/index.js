import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import CommentsReducer from "./reducer_comments";
import authReducer from "./reducer_auth";

const rootReducer = combineReducers({
  auth: authReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
  form: formReducer
});

export default rootReducer;
