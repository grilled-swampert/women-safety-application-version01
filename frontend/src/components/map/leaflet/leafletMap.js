import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const LeafletMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const myLocationRef = useRef(null);

  useEffect(() => {
    // Initialize map
    mapInstanceRef.current = L.map(mapRef.current).setView([0, 0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstanceRef.current);

    // Get user's location
    mapInstanceRef.current.locate({ setView: true, maxZoom: 10 });

    mapInstanceRef.current.on('locationfound', function(e) {
      myLocationRef.current = e.latlng;
      let myHome = L.marker(myLocationRef.current).addTo(mapInstanceRef.current);
      myHome.bindPopup("Mera Ghar").openPopup();
    });

    mapInstanceRef.current.on('locationerror', function(e) {
      alert("Location access denied.");
    });

    return () => {
      mapInstanceRef.current.remove();
    };
  }, []);

  const findNearestPoliceStation = () => {
    if (!myLocationRef.current) {
      alert("Your location is not yet determined. Please wait.");
      return;
    }

    let overpassUrl = "https://overpass-api.de/api/interpreter";
    let query = `
      [out:json];
      (
        node["amenity"="police"](around:10000,${myLocationRef.current.lat},${myLocationRef.current.lng});
      );
      out body;
    `;

    fetch(overpassUrl, {
      method: "POST",
      body: query
    })
    .then(response => response.json())
    .then(data => {
      if (data.elements.length > 0) {
        let nearestStation = data.elements.reduce((prev, curr) => {
          let prevDist = Math.hypot(prev.lat - myLocationRef.current.lat, prev.lon - myLocationRef.current.lng);
          let currDist = Math.hypot(curr.lat - myLocationRef.current.lat, curr.lon - myLocationRef.current.lng);
          return (prevDist < currDist) ? prev : curr;
        });

        let nearestMarker = L.marker([nearestStation.lat, nearestStation.lon]).addTo(mapInstanceRef.current);
        nearestMarker.bindPopup(nearestStation.tags.name || "Nearest Police Station").openPopup();

        // Route to Police Station
        let routeControl = L.Routing.control({
          waypoints: [
            L.latLng(nearestStation.lat, nearestStation.lon),
            L.latLng(myLocationRef.current)
          ]
        }).addTo(mapInstanceRef.current);

        routeControl.on('routesfound', function(e) {
          let route = e.routes[0].coordinates;
          animateMarker(nearestMarker, route);
        });
      } else {
        alert("No police stations found nearby.");
      }
    })
    .catch(err => console.error(err));
  };

  const routeFromRandomPoint = () => {
    mapInstanceRef.current.on('click', function(e) {
      let clickedPoint = e.latlng;

      let routeControl = L.Routing.control({
        waypoints: [
          L.latLng(clickedPoint.lat, clickedPoint.lng),
          L.latLng(myLocationRef.current)
        ]
      }).addTo(mapInstanceRef.current);

      let movingMarker = L.marker([clickedPoint.lat, clickedPoint.lng]).addTo(mapInstanceRef.current);

      routeControl.on('routesfound', function(e) {
        let route = e.routes[0].coordinates;
        animateMarker(movingMarker, route);
      });
    });
  };

  const animateMarker = (marker, route) => {
    let i = 0;
    function moveMarker() {
      if (i < route.length) {
        marker.setLatLng([route[i].lat, route[i].lng]);
        i++;
        setTimeout(moveMarker, 100);
      }
    }
    moveMarker();
  };

  return (
    <div>
      <h1>My Leafletjs Map</h1>
      <div ref={mapRef} id='map' style={{ width: '960px', height: '500px' }}></div>
      <button onClick={findNearestPoliceStation}>Find Nearest Police Station</button>
      <button onClick={routeFromRandomPoint}>Route from Random Point</button>
    </div>
  );
};

export default LeafletMap;