import { GET_PLACE } from "../actions/types";

export default function placesReducer(state = {}, action) {
  switch (action.type) {
    case GET_PLACE:
      if (action.payload.geometry) {
        return action.payload;
      }
      return state;
    default:
      return state;
  }
}
