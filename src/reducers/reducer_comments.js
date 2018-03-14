import _ from "lodash";
import { FETCH_COMMENTS, ADD_COMMENTS, DELETE_COMMENT } from "../actions";

export default function CommentsReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.payload.data;
        case ADD_COMMENTS:
            return action.payload.data;
        case DELETE_COMMENT:
            return action.payload;
        default:
            return state;
    }
}