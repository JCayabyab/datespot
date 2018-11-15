import { GET_PLACE } from "./types";
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

const generateRequest = location => {
  const request = {
    location,
    radius: 50000
  };

  request.type = randomElement(funTypes);
  return request;
};
