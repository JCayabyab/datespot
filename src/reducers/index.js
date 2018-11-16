import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import directionsReducer from "./directionsReducer";

const rootReducer = combineReducers({
  place: placeReducer,
  directions: directionsReducer
});

export default rootReducer;
