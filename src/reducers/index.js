import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import locationReducer from "./locationReducer";
import directionsReducer from "./directionsReducer";

const rootReducer = combineReducers({
  place: placeReducer,
  location: locationReducer,
  directions: directionsReducer
});

export default rootReducer;
