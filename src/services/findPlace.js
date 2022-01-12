import { MAP_API_KEY, MAP_API } from "../shared/config";
import {
  PLACES_SEARCH_STATUS_MESSAGE,
  STANDARD_API_FIELDS,
} from "../shared/constants";

export const makeURL = (input, fields = STANDARD_API_FIELDS) =>
  `${MAP_API}?input=${input}&fields=${fields.join(
    ","
  )}&key=${MAP_API_KEY}&inputtype=textquery`;

export const findPlace = (input, fields = STANDARD_API_FIELDS) => {
  const URL = makeURL(input, fields);
  console.log(`URL`, URL)
  return fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(PLACES_SEARCH_STATUS_MESSAGE.UNKNOWN_ERROR);
      }
    })
    .catch((error) => {
      alert(`${PLACES_SEARCH_STATUS_MESSAGE.NETWORK_ERROR}\n${error}`);
    });
};
