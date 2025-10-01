import { useEffect, useState, useRef } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

const GoogleMapsMarkers = (props) => {
  const map = useMap();
  const [stationData, setStationData] = useState([]);
  const clusterer = useRef(null);
  const markersRef = useRef([]);

  // Fetch station data from backend
  useEffect(() => {
    const fetchStationData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/z-stations");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched station data:", data);
        setStationData(data);
      } catch (error) {
        console.error("Error fetching station data:", error);
      }
    };

    fetchStationData();
  }, []);

  // Initialize MarkerClusterer
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({
        map,
        renderer: {
          render: ({ count, position }) => {
            // Custom cluster marker styling
            const marker = new google.maps.Marker({
              position,
              icon: {
                url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="18" fill="#F26522" stroke="#FFF" stroke-width="2"/>
                    <text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">${count}</text>
                  </svg>
                `)}`,
                scaledSize: new google.maps.Size(40, 40),
                anchor: new google.maps.Point(20, 20),
              },
              zIndex: 1000,
            });
            return marker;
          },
        },
      });
    }
  }, [map]);

  // Create markers and add to clusterer when station data changes
  useEffect(() => {
    if (!map || !clusterer.current || stationData.length === 0) return;

    // Clear existing markers
    clusterer.current.clearMarkers();
    markersRef.current.forEach((marker) => {
      marker.setMap(null);
    });
    markersRef.current = [];

    // Create new markers
    const markers = stationData.map((station) => {
      const marker = new google.maps.Marker({
        position: station.coordinates,
        icon: {
          url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32">
              <path d="M12 0C5.372 0 0 5.372 0 12c0 9 12 20 12 20s12-11 12-20c0-6.628-5.372-12-12-12z" fill="#F26522"/>
              <circle cx="12" cy="12" r="8" fill="#FFF"/>
              <text x="12" y="16" text-anchor="middle" fill="#F26522" font-family="Arial" font-size="10" font-weight="bold">Z</text>
            </svg>
          `)}`,
          scaledSize: new google.maps.Size(24, 32),
          anchor: new google.maps.Point(12, 32),
        },
        title: station.stationName,
      });

      // Add click listener for marker
      marker.addListener("click", () => {
        console.log("Station clicked:", station);
        // You can add custom behavior here, like showing an info window
      });

      return marker;
    });

    // Store markers reference
    markersRef.current = markers;

    // Add markers to clusterer
    clusterer.current.addMarkers(markers);
  }, [map, stationData]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (clusterer.current) {
        clusterer.current.clearMarkers();
      }
      markersRef.current.forEach((marker) => {
        marker.setMap(null);
      });
    };
  }, []);

  return null; // We're using traditional markers, not React components
};

export default GoogleMapsMarkers;
