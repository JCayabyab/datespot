import { GET_PLACE } from "../actions/types";

export default function placesReducer(state = {}, action) {
  switch (action.type) {
    case GET_PLACE:
      return action.payload;
    default:
      return state;
  }
}
