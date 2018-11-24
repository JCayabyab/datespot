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

  // this Promise format allows for recursion to allow for retries if zero results are found.
  // This makes it possible to try another type if one is not found,
  // e.g. if no aquariums in the area, try to find a movie theater.
  const makeRequest = (resolve, reject, counter) => {
    const { request, description } = generateRequest(location, key);

    service.nearbySearch(request, (results, status) => {
      if (status === maps.places.PlacesServiceStatus.OK) {
        resolve({ results, description });
        return;
      } else {
        if (counter < 4) {
          counter++;
          // setTimeout for exponential backoff of API requests.
          setTimeout(
            Math.pow(2, counter) * 90,
            makeRequest(resolve, reject, counter)
          );
        } else {
          reject(status);
        }
      }
    });
  };

  new Promise((resolve, reject) => {
    makeRequest(resolve, reject, counter);
  })
    .then(data => {
      const result = randomElement(data.results);
      dispatch({
        type: GET_PLACE,
        payload: result
      });
      dispatch({
        type: GET_DESCRIPTION,
        payload: data.description
      });
    })
    .catch(status => {
      console.log(status, ": There are no results in this location.");
      // This makes the header display no results.
      const noResultsRequest = {
        name: "Sorry! Nothing here."
      };
      dispatch({
        type: GET_PLACE,
        payload: noResultsRequest
      });
      dispatch({
        type: GET_DESCRIPTION,
        payload: "..."
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
