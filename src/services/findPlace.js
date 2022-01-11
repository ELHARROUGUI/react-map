import {MAP_API_KEY, MAP_API} from "../config";

export const findPlace = (input, fields=["formatted_address","name","rating","opening_hours","geometry"]) => {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const URL = `${MAP_API}?input=${input}&fields=${fields.join(",")}&key=${MAP_API_KEY}&inputtype=textquery`;
    console.log(`URL`, URL)
    return fetch(URL).then((data) => data.json());
}