import _ from "lodash";
import { FETCH_COMMENTS, ADD_COMMENTS, DELETE_COMMENT, CLEAR_COMMENTS, EDIT_COMMENT } from "../actions";

export default function CommentsReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
          return action.payload.data;
        case EDIT_COMMENT:
            //console.log(action.payload.data);
            return state.map(comment => {
              if (comment._id === action.payload.data._id) {
                return { ...comment, content:action.payload.data.content};
              } else {
                return comment;
              }
            });
        case ADD_COMMENTS:
          //console.log(action.payload.data);
          return _.concat(state, action.payload.data);
        case DELETE_COMMENT:
          //console.log('deleted: ' + action.payload)
          //console.log(state);
          return _.reject(state, {_id:action.payload});
          //return action.payload;
        case CLEAR_COMMENTS:
          return []
        default:
            return state;
    }
}