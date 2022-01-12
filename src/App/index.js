import { useState, useEffect } from "react";
import { findPlace } from "../services/findPlace";
import {
  PLACES_SEARCH_STATUS_MESSAGE,
  DEFAULT_LOCATION,
  DEFAULT_ZOOM_LEVEL,
} from "../shared/constants";
import View from "./view";

const App = () => {
  const [payload, setPayload] = useState(DEFAULT_LOCATION);
  const [isReady, setIsReady] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setIsErrorMessage] = useState("");

  useEffect(() => {}, [isReady, isError]);

  const handleSubmit = (searchInput) => {
    setIsReady(false);
    findPlace(searchInput).then(({ status, candidates }) => {
      if (status === "OK" && Array.isArray(candidates) && candidates.length) {
        setPayload(candidates[0]);
        setIsReady(true);
        setIsError(false);
      } else {
        setIsError(true);
        setIsErrorMessage(PLACES_SEARCH_STATUS_MESSAGE[status]);
        setIsReady(true);
      }
    });
  };

  return (
    <View
      isReady={isReady}
      isError={isError}
      errorMessage={errorMessage}
      handleSubmit={handleSubmit}
      payload={payload}
      zoomLevel={DEFAULT_ZOOM_LEVEL}
    />
  );
};

export default App;
