import _ from "lodash";
import { FETCH_COMMENTS, ADD_COMMENTS, DELETE_COMMENT, CLEAR_COMMENTS } from "../actions";

export default function CommentsReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.payload.data;
        case ADD_COMMENTS:
            //console.log(action.payload.data);
            return _.concat(action.payload.data, state);
        case DELETE_COMMENT:
            //console.log('deleted: ' + action.payload)
            return _.without(state, action.payload);
            //return action.payload;
        case CLEAR_COMMENTS:
          return []
        default:
            return state;
    }
}