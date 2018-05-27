import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import CommentsReducer from "./reducer_comments";
import authReducer from "./reducer_auth";
import errReducer from "./reducer_error";


const rootReducer = combineReducers({
  auth: authReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
  form: formReducer,
  err: errReducer,
});

export default rootReducer;
