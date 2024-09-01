// MapContent.js
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
            <p>
              <strong>KJ Somaiya College of Engineering</strong>
            </p>
            <p className="cctv-imp-info">
              Body text for your whole article or post. We'll put in some lorem
              ipsum to show how a filled-out page might look:
            </p>
            <p>
              Excepteur efficient emerging, minim veniam anim aute carefully
              curated Ginza conversation exquisite perfect nostrud nisi
              intricate Content. Qui international first-className nulla ut.
              Punctual, essential lovely queen tempor eiusmod irure.
              Exclusive bespoke charming Scandinavian impeccable aute quality of
              life soft power pariatur Melbourne occaecat discerning. Qui
              wardrobe aliquid, et Porter destination Toto remarkable officia
              Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur.
            </p>
            {locationInfo && (
              <div className="location-info">
                <h4>Your Location</h4>
                <p>
                  Latitude: {locationInfo.lat}, Longitude: {locationInfo.lng}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
