import {GET_PLACE} from "./types";

export function getPlace(place) {
  return {
    type: GET_PLACE,
    payload: place
  }
}