import {
  GET_PLACE,
  GET_LOCATION,
  GET_DIRECTIONS,
  GET_DESCRIPTION
} from "./types";
import randomElement from "../utils/randomElement";
import generateRequest from "../utils/generateRequest";

export const getPlace = ({ lat, lng }, key) => async dispatch => {
  const { maps } = window.google;

  const service = new maps.places.PlacesService(document.createElement("div"));
  const location = new maps.LatLng(lat, lng);

  let counter = 0;

  const makeRequest = (resolve, reject, counter) => {
    const { request, description } = generateRequest(location, key);

    service.nearbySearch(request, (results, status) => {
      if (status === maps.places.PlacesServiceStatus.OK) {
        resolve({ results, description });
        return;
      } else {
        if (counter < 3) {
          console.log(request);
          counter++;
          makeRequest(resolve, reject, counter);
        } else {
          console.log("exit", status, reject, counter);
          dispatch({
            type: GET_PLACE,
            payload: status
          });
          reject(status);
        }
      }
    });
  };

  new Promise((resolve, reject) => {
    makeRequest(resolve, reject, counter);
  }).then(data => {
    const result = randomElement(data.results);
    dispatch({
      type: GET_PLACE,
      payload: result
    });
    dispatch({
      type: GET_DESCRIPTION,
      payload: data.description
    });
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