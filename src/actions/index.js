import { GET_PLACE } from "./types";
import { GET_LOCATION } from "./types";
import { GET_DIRECTIONS } from "./types";
import randomElement from "../utils/randomElement";

const funTypes = [
  "amusement_park",
  "aquarium",
  "museum",
  "art_gallery",
  "book_store",
  "bowling_alley",
  "movie_theater",
  "park",
  "pet_store",
  "shopping_mall",
  "zoo"
];

const foodTypes = ["restaurant"];

export const getPlace = (google, map, { lat, lng }) => async dispatch => {
  const service = new google.maps.places.PlacesService(map);
  const location = new google.maps.LatLng(lat, lng);
  service.nearbySearch(generateRequest(location), (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
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

export const getDirections = (
  google,
  origin,
  destination
) => async dispatch => {
  const service = new google.maps.DirectionsService();
  const request = {
    avoidTolls: true,
    origin,
    destination,
    travelMode: google.maps.TravelMode.DRIVING
  };

  service.route(request, (results, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
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

const generateRequest = location => {
  const request = {
    location,
    radius: 50000
  };

  request.type = randomElement(funTypes);
  return request;
};
