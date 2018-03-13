import _ from "lodash";
import { FETCH_COMMENTS, ADD_COMMENTS } from "../actions";

export default function CommentsReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.payload.data;
        case ADD_COMMENTS:
            return action.payload.data;
        default:
            return state;
    }
}