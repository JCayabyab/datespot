import {GET_DESCRIPTION} from "../actions/types";

export default function directionsReducer(state = "Fall in love at", action) {
  switch (action.type) {
    case GET_DESCRIPTION:
      return action.payload;
    default:
      return state;
  }
} 