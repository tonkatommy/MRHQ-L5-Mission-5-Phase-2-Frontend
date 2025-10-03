import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";

// Import for states and allows parent components to control the map
import { useState, useImperativeHandle, forwardRef, useEffect } from "react";

// Import Google Maps Markers component
import GoogleMapsMarkers from "./GoogleMapsMarkers.jsx";

const GoogleMapInner = forwardRef((props, ref) => {
  const map = useMap(); // This hook gets the map instance
  const { stations, userLocation, selectedStation, onStationSelect, showPrices } = props;
  const [directionsRenderer, setDirectionsRenderer] = useState(null); //renders route lines on the map
  const [directionsService, setDirectionsService] = useState(null); // calculates routes between locations

  // Initialize directions service and renderer
  useEffect(() => {
    if (map && window.google) {
      const service = new window.google.maps.DirectionsService();
      const renderer = new window.google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeColor: "#F26522", // Orange color
          strokeWeight: 4,
          strokeOpacity: 0.8,
        },
        suppressMarkers: true, // Don't show default A/B markers
      });

      renderer.setMap(map);
      setDirectionsService(service);
      setDirectionsRenderer(renderer);

      return () => {
        renderer.setMap(null);
      };
    }
  }, [map]);

  // Handle directions when selected station changes
  useEffect(() => {
    if (directionsService && directionsRenderer && selectedStation && userLocation) {
      const origin = userLocation;
      const destination = {
        lat: selectedStation.coordinates?.lat || selectedStation.latitude,
        lng: selectedStation.coordinates?.lng || selectedStation.longitude,
      };

      console.log("Getting directions from:", origin, "to:", destination);

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK") {
            console.log("Directions result:", result);
            directionsRenderer.setDirections(result);
          } else {
            console.error("Directions request failed:", status);
          }
        }
      );
    } else if (directionsRenderer && !selectedStation) {
      // Clear directions when no station is selected
      directionsRenderer.setDirections({ routes: [] });
    }
  }, [directionsService, directionsRenderer, selectedStation, userLocation]); // Triggers when selectedStation or userLocation changes

  // Expose map control functions to parent components
  useImperativeHandle(ref, () => ({
    // Moves map to specific coordinates
    centerAndZoom: (lat, lng, zoomLevel = 15) => {
      console.log("centerAndZoom called with:", { lat, lng, zoomLevel });
      console.log("Map instance:", map);
      if (map) {
        console.log("Setting center and zoom...");
        map.setCenter({ lat, lng });
        map.setZoom(zoomLevel);
        console.log("Center and zoom set successfully");
      } else {
        console.log("No map instance available");
      }
    },
    // Returns raw map object 
    getMapInstance: () => map,
    // Removes map lines
    clearDirections: () => {
      if (directionsRenderer) {
        directionsRenderer.setDirections({ routes: [] });
      }
    },
  }));

  useEffect(() => {
    if (map) {
      console.log("Map instance is now available:", map);
    }
  }, [map]);

  return (
    <GoogleMapsMarkers
      stations={stations}
      userLocation={userLocation}
      selectedStation={selectedStation}
      onStationSelect={onStationSelect}
      showPrices={showPrices}
    />
  );
});

GoogleMapInner.displayName = "GoogleMapInner";

const GoogleMap = forwardRef((props, ref) => {
  const { stations, userLocation, selectedStation, onStationSelect, showPrices } = props;

  // Function to handle custom My Location button click
  const handleMyLocationClick = () => {
    // If there's an active user location (from search or current location), center on that
    if (userLocation && userLocation.lat && userLocation.lng) {
      console.log("Centering on active location marker:", userLocation);
      if (ref.current) {
        ref.current.centerAndZoom(userLocation.lat, userLocation.lng, 15);
      }
      return;
    }

    // Fallback: Use browser's geolocation API if no active location is set
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    // User browser's geolocation API to get current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Centers and zooms on user's location
        if (ref.current) {
          ref.current.centerAndZoom(lat, lng, 15);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Unable to retrieve your location.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Authenticate GoogleMaps API */}
      <APIProvider
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        onLoad={() => console.log("Maps API has loaded")}
      >
        <Map
          // Sets default view to New Zealand
          defaultZoom={6}
          defaultCenter={{ lat: -42.48101284616512, lng: 172.16160268498984 }}
          // Custom map styling
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
          onCameraChanged={(ev) => {
            console.log("Camera changed:", ev);
            console.log("center:", ev.detail.center);
            console.log("zoom", ev.detail.zoom);
          }}
          options={{
            // Only show zoom controls, disable everything else
            disableDefaultUI: true,
            zoomControl: true,
          }}
        > 
          {/* Manages map logic and locations */}
          <GoogleMapInner
            ref={ref}
            stations={stations}
            userLocation={userLocation}
            selectedStation={selectedStation}
            onStationSelect={onStationSelect}
            showPrices={showPrices}
          />
        </Map>
      </APIProvider>

      {/* Custom My Location Button */}
      <div
        onClick={handleMyLocationClick}
        style={{
          position: "absolute",
          bottom: "110px", // Position above zoom controls
          right: "10px",
          zIndex: 1000,
          backgroundColor: "white",
          border: "2px solid #dadce0",
          borderRadius: "2px",
          boxShadow: "0 2px 6px rgba(0,0,0,.3)",
          cursor: "pointer",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          userSelect: "none",
        }}
        title="My Location"
      >
        🎯
      </div>
    </div>
  );
});

GoogleMap.displayName = "GoogleMap"; // Required for forwardRef

export default GoogleMap;
