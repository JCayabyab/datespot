import randomElement from "./randomElement";

const types = {
  fun: [
    {
      description: "Get your heart pumping at",
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
      description: "Look through music records at",
      type: "store"
    },
    { query: "laser tag", description: "Play laser tag at" },
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

const generateRequest = (location, key) => {
  const request = {
    radius: 15000,
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

export default generateRequest;
