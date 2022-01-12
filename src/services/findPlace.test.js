import { makeURL } from "./findPlace";

describe("findPlace service function", () => {
  test("makeURL function with input arg", async () => {
    expect(makeURL("Barcelona")).toBe(
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Barcelona&fields=formatted_address,name,rating,opening_hours,geometry&key=AIzaSyAvnH3F1F3QQWGjibVUeRt8fv87bOJqigk&inputtype=textquery"
    );
  });
  test("makeURL function with input & fields args", async () => {
    expect(makeURL("Barcelona", ["name"])).toBe(
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Barcelona&fields=name&key=AIzaSyAvnH3F1F3QQWGjibVUeRt8fv87bOJqigk&inputtype=textquery"
    );
  });
});
