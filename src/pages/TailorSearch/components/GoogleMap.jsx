import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useState, useImperativeHandle, forwardRef, useEffect } from "react";

// Import Google Maps Markers component
import GoogleMapsMarkers from "./GoogleMapsMarkers.jsx";

const GoogleMapInner = forwardRef((props, ref) => {
  const map = useMap(); // This hook gets the map instance
  const { stations, userLocation, selectedStation, onStationSelect } = props;
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);

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
    if (
      directionsService &&
      directionsRenderer &&
      selectedStation &&
      userLocation
    ) {
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
  }, [directionsService, directionsRenderer, selectedStation, userLocation]);

  // Expose map control functions to parent components
  useImperativeHandle(ref, () => ({
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
    getMapInstance: () => map,
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
    />
  );
});

GoogleMapInner.displayName = "GoogleMapInner";

const GoogleMap = forwardRef((props, ref) => {
  const { stations, userLocation, selectedStation, onStationSelect } = props;

  // Function to handle custom My Location button click
  const handleMyLocationClick = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

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
      <APIProvider
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        onLoad={() => console.log("Maps API has loaded")}
      >
        <Map
          defaultZoom={6}
          defaultCenter={{ lat: -42.48101284616512, lng: 172.16160268498984 }}
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
          <GoogleMapInner
            ref={ref}
            stations={stations}
            userLocation={userLocation}
            selectedStation={selectedStation}
            onStationSelect={onStationSelect}
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
