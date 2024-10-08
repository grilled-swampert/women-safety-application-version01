import React, { useState } from "react";
import "./mapContent.css";

import cctvFootage from "../photos/cctvFootage.svg";
import LeafletMap from "../leaflet/leafletMap";

export default function MapContent() {
  const [locationInfo, setLocationInfo] = useState(null);

  const handleLocationSelected = (location) => {
    setLocationInfo(location);
  };

  return (
    <div className="container">
      <h2>Map:</h2>
      <div className="map-container">
        <div className="map-image">
          <LeafletMap onLocationSelected={handleLocationSelected} />
        </div>
      </div>
      <div className="cctv-container">
        <div className="cctv-information">
          <div className="cctv-image">
            <img src={cctvFootage} alt="CCTV Footage" />
          </div>
          <div className="cctv-info">
            <h3>CCTV Footage</h3>
            <p className="cctv-location">
              <strong>{locationInfo?.text || "No location selected"}</strong>
            </p>
            <p className="cctv-imp-info">
              Important information about the location:
            </p>
            <p>
              Number of people: <strong>{locationInfo?.people || 4}</strong>
            </p>
            <p>
              Time:{" "}
              <strong>
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </strong>
            </p>
            <p>
              Gesture: {" "}
              <strong>{locationInfo?.gesture || "Standing"}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
