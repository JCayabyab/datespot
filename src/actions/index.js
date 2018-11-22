import { GET_PLACE } from "./types";
import { GET_LOCATION } from "./types";
import { GET_DIRECTIONS } from "./types";
import randomElement from "../utils/randomElement";

export const getPlace = ({ lat, lng }, key) => async dispatch => {
  const { maps } = window.google;

  const service = new maps.places.PlacesService(document.createElement("div"));
  const location = new maps.LatLng(lat, lng);

  const request = generateRequest(location, key);

  service.nearbySearch(request, (results, status) => {
    if (status === maps.places.PlacesServiceStatus.OK) {
      dispatch({
        type: GET_PLACE,
        payload: randomElement(results)
      });
    } else {
      dispatch({
        type: GET_PLACE,
        payload: status
      });
    }
  });
};

export const getLocation = (lat, lng) => {
  return { type: GET_LOCATION, payload: { lat, lng } };
};

export const getDirections = (origin, destination) => async dispatch => {
  const { maps } = window.google;
  const service = new maps.DirectionsService();
  const request = {
    avoidTolls: true,
    origin,
    destination,
    travelMode: maps.TravelMode.DRIVING
  };

  service.route(request, (results, status) => {
    if (status === maps.DirectionsStatus.OK) {
      dispatch({
        type: GET_DIRECTIONS,
        payload: results
      });
    } else {
      console.log(status);
      dispatch({
        type: GET_DIRECTIONS,
        payload: status
      });
    }
  });
};

const generateRequest = (location, key) => {
  console.log(key);

  const funTypes = [
    "amusement_park",
    "aquarium",
    "museum",
    "art_gallery",
    "book_store",
    "bowling_alley",
    "movie_theater",
    "park",
    "shopping_mall",
    "zoo"
  ];

  const request = {
    location,
    radius: 50000
  };

  request.type = randomElement(funTypes);
  return request;
};
