import GoogleMapReact from "google-map-react";
import Marker from "../Marker";
import "./style.css";

const Map = ({ payload, zoomLevel }) => {
  console.log(`payload`, payload)
  const {
    geometry: { location },
  } = payload;
  return (
    <div className="map" data-testid="googleMapReact">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <Marker payload={payload} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
