// import _ from "lodash";
import {ADD_ERR, CLEAR_ERR} from "../actions";

export default function errReducer(state = [], action) {
  switch (action.type) {
    case ADD_ERR:
      return [action.payload]
    case CLEAR_ERR:
      return []
    default:
      return state;
  }
}