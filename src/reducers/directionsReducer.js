import {GET_DIRECTIONS} from "../actions/types";

export default function directionsReducer(state = {}, action) {
  switch (action.type) {
    case GET_DIRECTIONS:
      return action.payload;
    default:
      return state;
  }
} 