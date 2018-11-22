import {GET_LOCATION} from "../actions/types";

export default function locationReducer(state = null, action) {
  switch (action.type) {
    case GET_LOCATION:
      return action.payload;
    default:
      return state;
  }
} 