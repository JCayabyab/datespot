import {
  GET_PLACE,
  GET_LOCATION,
  GET_DIRECTIONS,
  GET_DESCRIPTION
} from "./types";
import randomElement from "../utils/randomElement";

export const getPlace = ({ lat, lng }, key) => async dispatch => {
  const { maps } = window.google;

  const service = new maps.places.PlacesService(document.createElement("div"));
  const location = new maps.LatLng(lat, lng);

  let counter = 0;

  const makeRequest = (resolve, reject, counter) => {
    const { request, description } = generateRequest(location, key);

    service.nearbySearch(request, (results, status) => {
      if (status === maps.places.PlacesServiceStatus.OK) {
        console.log(resolve, reject);
        resolve({ results, description });
        return;
      } else {
        if (counter < 3) {
          counter++;
          makeRequest(resolve, reject, counter);
        } else {
          console.log("exit", status, reject, counter);
          // dispatch({
          //   type: GET_PLACE,
          //   payload: status
          // });
          reject(status);
        }
      }
    });
  };

  new Promise((resolve, reject) => {
    makeRequest(resolve, reject, counter);
  }).then(data => {
    console.log(data);
    dispatch({
      type: GET_PLACE,
      payload: randomElement(data.results)
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

const generateRequest = (location, key) => {
  const types = {
    fun: [
      { query: "amusement park", description: "Ride rollercoasters at" },
      { query: "aquarium", description: "Take a deep sea dive at" },
      { query: "bowling alley", description: "Bowl some gutterballs at" },
      { query: "movie theater", description: "Watch a horror movie at" },
      { query: "zoo", description: "Feed some animals at" },
      { query: "paint night", description: "Make a masterpiece at" },
      { query: "record store", description: "Bond over music at" },
      { query: "laser tag", description: "Shoot your shot at" },
      { query: "pool", description: "Sink balls into pockets at" }
    ],
    food: [
      { query: "ice cream shop", description: "Get some ice cream at" },
      { query: "candy shop", description: "Get some sweets at" },
      { query: "date spot", description: "Get some dinner at" }
    ],
    drink: [
      { query: "bar", description: "Get some drinks at" },
      { query: "nightclub", description: "Get your dance on at" }
    ],
    stroll: [
      { query: "art gallery", description: "Find cool paintings at" },
      { query: "book store", description: "Bond over books at" },
      { query: "coffee house", description: "Bond over coffee at" },
      { query: "park", description: "Take a stroll through" },
      { query: "shopping mall", description: "Take a stroll through" },
      { query: "museum", description: "Look through old relics at" }
    ]
  };

  const request = {
    radius: 30000,
    location,
    minPriceLevel: 1,
    fields: ["geometry", "name", "id", "place_id", "types"]
  };

  const { query, description } = randomElement(types[key]);
  Object.assign(request, { keyword: query });

  return { request, description };
};
