import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import locationReducer from "./locationReducer";
import directionsReducer from "./directionsReducer";
import descReducer from "./descReducer";

const rootReducer = combineReducers({
  place: placeReducer,
  location: locationReducer,
  directions: directionsReducer,
  description: descReducer
});

export default rootReducer;
