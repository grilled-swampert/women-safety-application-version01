import React from "react";
import "./mapContent.css";

import cctvFootage from "../photos/cctvFootage.svg";
import LeafletMap from "../leaflet/leafletMap";

export default function MapContent() {
  return (
    <div className="container">
      <h2>Map:</h2>
      <div className="map-container">
        <LeafletMap />
        <div className="alert-overlay">
          <span className="alert-icon">!</span>
          ALERT (1)
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
              Punctual adipisicing, essential lovely queen tempor eiusmod irure.
              Exclusive bespoke charming Scandinavian impeccable aute quality of
              life soft power pariatur Melbourne occaecat discerning. Qui
              wardrobe aliquid, et Porter destination Toto remarkable officia
              Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur.
            </p>
          </div>
        </div>
        <div className="button-container">
          <button className="button button-primary">
            Send Backup to Location
          </button>
          <button className="button button-secondary">
            Send Alert to Nearest Police Station
          </button>
        </div>
      </div>
    </div>
  );
}
