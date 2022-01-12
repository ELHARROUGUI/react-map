export const DEFAULT_LOCATION = {
  formatted_address:
    "Carrer de Josep Irla i Bosch, 3, 08034 Barcelona, Espagne",
  geometry: {
    location: {
      lat: 41.3912047,
      lng: 2.1292368,
    },
    viewport: {
      northeast: {
        lat: 41.39244657989271,
        lng: 2.130630079892722,
      },
      southwest: {
        lat: 41.38974692010727,
        lng: 2.127930420107278,
      },
    },
  },
  name: "ForceManager",
  opening_hours: {
    open_now: true,
  },
  rating: 4.5,
};

export const DEFAULT_ZOOM_LEVEL = 17;

export const PLACES_SEARCH_STATUS_MESSAGE = {
  OK: "API request was successful",
  LOADING: "Loading...",
  ZERO_RESULTS: "No results",
  INVALID_REQUEST: "API request was malformed",
  OVER_QUERY_LIMIT: "Error related to API account configurations",
  REQUEST_DENIED: "Missing or invalid API key",
  UNKNOWN_ERROR: "Unknown error",
  NETWORK_ERROR: "Check your network or server configurations",
};

export const APP_ELEMENTS = [
  "form",
  "searchInput",
  "submitButton",
  "message",
  "googleMapReact",
  "marker",
];

export const STANDARD_API_FIELDS = [
  "formatted_address",
  "name",
  "rating",
  "opening_hours",
  "geometry",
];
