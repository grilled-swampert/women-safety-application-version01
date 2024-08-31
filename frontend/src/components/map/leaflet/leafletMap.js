import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "./leafletMap.css";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LeafletMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const myLocationRef = useRef(null);
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    const defaultMumbaiPosition = [19.076, 72.8777];
    const defaultZoomLevel = 12;

    mapInstanceRef.current = L.map(mapRef.current).setView(
      defaultMumbaiPosition,
      defaultZoomLevel
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstanceRef.current);

    let mumbaiMarker = L.marker(defaultMumbaiPosition, {
      icon: defaultIcon,
    }).addTo(mapInstanceRef.current);
    mumbaiMarker.bindPopup("Mumbai, India").openPopup();

    setTimeout(() => {
      mapInstanceRef.current.locate({ setView: true, maxZoom: 16 });

      mapInstanceRef.current.on("locationfound", function (e) {
        try {
          myLocationRef.current = e.latlng;
          setLocationInfo({
            lat: e.latlng.lat.toFixed(6),
            lng: e.latlng.lng.toFixed(6),
            text: "Mera Ghar",
          });

          if (mapInstanceRef.current) {
            mapInstanceRef.current.removeLayer(mumbaiMarker);

            let myHome = L.marker(myLocationRef.current, {
              icon: defaultIcon,
            }).addTo(mapInstanceRef.current);
            myHome.bindPopup("Mera Ghar").openPopup();
          }
        } catch (error) {
          console.error("Error setting location marker:", error);
        }
      });

      mapInstanceRef.current.on("locationerror", function (e) {
        alert("Location access denied.");
      });
    }, 500);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  const findNearestPoliceStation = () => {
    if (!myLocationRef.current) {
      alert("Your location is not yet determined. Please wait.");
      return;
    }

    const overpassUrl = "https://overpass-api.de/api/interpreter";
    const query = `
      [out:json];
      (
        node["amenity"="police"](around:10000,${myLocationRef.current.lat},${myLocationRef.current.lng});
      );
      out body;
    `;

    fetch(overpassUrl, {
      method: "POST",
      body: query,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.elements.length > 0) {
          let nearestStation = data.elements.reduce((prev, curr) => {
            let prevDist = Math.hypot(
              prev.lat - myLocationRef.current.lat,
              prev.lon - myLocationRef.current.lng
            );
            let currDist = Math.hypot(
              curr.lat - myLocationRef.current.lat,
              curr.lon - myLocationRef.current.lng
            );
            return prevDist < currDist ? prev : curr;
          });

          let policeMarker = L.marker(
            [nearestStation.lat, nearestStation.lon],
            { icon: defaultIcon }
          ).addTo(mapInstanceRef.current);
          policeMarker
            .bindPopup(nearestStation.tags.name || "Nearest Police Station")
            .openPopup();

          let routeControl = L.Routing.control({
            waypoints: [
              L.latLng(nearestStation.lat, nearestStation.lon),
              L.latLng(myLocationRef.current),
            ],
            createMarker: function () {
              return null;
            },
          }).addTo(mapInstanceRef.current);

          routeControl.on("routesfound", function (e) {
            let routes = e.routes;
            let movingMarker = L.marker(
              [nearestStation.lat, nearestStation.lon],
              { icon: defaultIcon }
            ).addTo(mapInstanceRef.current);
            animateMarker(movingMarker, routes[0].coordinates);
          });
        } else {
          alert("No police stations found nearby.");
        }
      })
      .catch((err) => console.error(err));
  };

  const routeFromRandomPoint = () => {
    mapInstanceRef.current.on("click", function (e) {
      let clickedPoint = e.latlng;

      let staticMarker = L.marker([clickedPoint.lat, clickedPoint.lng], {
        icon: defaultIcon,
      })
        .addTo(mapInstanceRef.current)
        .bindPopup("Clicked Point")
        .openPopup();

      let routeControl = L.Routing.control({
        waypoints: [
          L.latLng(clickedPoint.lat, clickedPoint.lng),
          L.latLng(myLocationRef.current),
        ],
        createMarker: function () {
          return null;
        },
      }).addTo(mapInstanceRef.current);

      routeControl.on("routesfound", function (e) {
        let routes = e.routes;
        let movingMarker = L.marker([clickedPoint.lat, clickedPoint.lng], {
          icon: defaultIcon,
        })
          .addTo(mapInstanceRef.current)
          .bindPopup("Moving to Your Location");

        animateMarker(movingMarker, routes[0].coordinates);
      });
    });
  };

  const animateMarker = (marker, route) => {
    let i = 0;
    const animationSpeed = 200;

    function moveMarker() {
      if (i < route.length) {
        marker.setLatLng(L.latLng(route[i].lat, route[i].lng));
        mapInstanceRef.current.panTo(L.latLng(route[i].lat, route[i].lng));
        i++;
        setTimeout(moveMarker, animationSpeed);
      } else {
        marker.setPopupContent("Arrived at Your Location").openPopup();
      }
    }
    moveMarker();
  };

  return (
    <div>
      <div
        ref={mapRef}
        id="map"
        style={{ width: "100%", height: "500px" }}
      ></div>
      <div className="button-container">
        <button
          onClick={findNearestPoliceStation}
          className="button button-primary"
        >
          Find Nearest Police Station
        </button>
        <button
          onClick={() => {
            mapInstanceRef.current.off("click");
            routeFromRandomPoint();
          }}
          className="button button-secondary"
        >
          Route from Random Point
        </button>
      </div>
      {locationInfo && (
        <div className="location-info">
          <h3>Your Location</h3>
          <p>Latitude: {locationInfo.lat}</p>
          <p>Longitude: {locationInfo.lng}</p>
          <p>{locationInfo.text}</p>
        </div>
      )}
    </div>
  );
};

export default LeafletMap;
