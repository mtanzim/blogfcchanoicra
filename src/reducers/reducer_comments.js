import _ from "lodash";
import { FETCH_COMMENTS, ADD_COMMENTS, DELETE_COMMENT, CLEAR_COMMENTS, EDIT_COMMENT, ADD_COMMENT_FAILED } from "../actions";

export default function CommentsReducer(state = {}, action) {

  // prevent crashing the state tree
    
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload.data;
    case EDIT_COMMENT:
      if (action.payload.data === undefined) return state; 
      return state.map(comment => {
        if (comment._id === action.payload.data._id) {
          return { ...comment, content: action.payload.data.content };
        } else {
          return comment;
        }
      });

    case ADD_COMMENTS:
      if (action.payload.data === undefined) return state;
      return _.concat(state, action.payload.data);

    case DELETE_COMMENT:
      //console.log('deleted: ' + action.payload)
      //console.log(state);
      return _.reject(state, { _id: action.payload });
    //return action.payload;
    case CLEAR_COMMENTS:
      return []
    default:
      return state;
  }
}