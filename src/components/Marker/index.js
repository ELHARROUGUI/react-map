import { useState } from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import "./style.css";

const MarkerDetails = ({
  payload: {
    name="-",
    formatted_address="-",
    geometry: { location={lat:"-", lng:"-"} },
  },
}) => {
  return (
    <div className="pin-detail">
      <p>
        -Name: <b>{name}</b><br />
        -Formatted address: <b>{formatted_address}</b><br />
        -Geographic position: <b>({location.lat},{location.lng})</b>
      </p>
    </div>
  );
};

const Marker = ({ payload }) => {
  const [displayDetails, setDisplayDetails] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setDisplayDetails(!displayDetails);
  };

  return (
    <div data-testid="marker" className="pin" onClick={handleClick}>
      <Icon icon={locationIcon} className="pin-icon" />
      {displayDetails && <MarkerDetails payload={payload} />}
    </div>
  );
};

export default Marker;
