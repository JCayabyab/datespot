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

const generateRequest = (location, key) => {
  const types = {
    fun: [
      {
        description: "Ride rollercoasters at",
        type: "amusement_park"
      },
      {
        description: "Take a deep sea dive at",
        type: "aquarium"
      },
      {
        description: "Bowl some gutterballs at",
        type: "bowling_alley"
      },
      {
        description: "Watch a horror movie at",
        type: "movie_theater"
      },
      { description: "Feed some animals at", type: "zoo" },
      { query: "paint night", description: "Attend a paint night at" },
      {
        query: "record store",
        description: "Look through music records sat",
        type: "store"
      },
      { query: "laser tag", description: "Shoot your shot at" },
      { query: "billiards", description: "Sink balls into pockets at" }
    ],
    food: [
      { query: "ice cream", description: "Get some ice cream at" },
      { query: "candy store", description: "Get some sweets at" },
      {
        query: "date spot",
        description: "Get some dinner at",
        type: "restaurant"
      }
    ],
    drink: [
      { type: "bar", description: "Get some drinks at" },
      { type: "night_club", description: "Get your dance on at" }
    ],
    stroll: [
      { type: "art_gallery", description: "Find cool paintings at" },
      { type: "book_store", description: "Bond over books at" },
      { query: "coffee house", description: "Bond over coffee at" },
      { type: "park", description: "Take a stroll through" },
      { type: "shopping_mall", description: "Take a stroll through" },
      { type: "museum", description: "Look through old relics at" }
    ]
  };

  const request = {
    radius: 30000,
    location,
    fields: ["geometry", "name", "id", "place_id", "types"]
  };

  const { query, description, type } = randomElement(types[key]);
  Object.assign(
    request,
    query ? { keyword: query } : {},
    type ? { type } : {},
    key === "food" ? { minPriceLevel: 2, maxPriceLevel: 4 } : {}
  );

  return { request, description };
};
