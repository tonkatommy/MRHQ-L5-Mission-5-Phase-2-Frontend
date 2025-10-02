import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useState, useImperativeHandle, forwardRef, useEffect } from "react";

// Import Google Maps Markers component
import GoogleMapsMarkers from "./GoogleMapsMarkers.jsx";

const GoogleMapInner = forwardRef((props, ref) => {
  const map = useMap(); // This hook gets the map instance
  const { stations } = props;

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
  }));

  useEffect(() => {
    if (map) {
      console.log("Map instance is now available:", map);
    }
  }, [map]);

  return <GoogleMapsMarkers stations={stations} />;
});

GoogleMapInner.displayName = "GoogleMapInner";

const GoogleMap = forwardRef((props, ref) => {
  const { stations } = props;
  
  return (
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
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <GoogleMapInner ref={ref} stations={stations} />
      </Map>
    </APIProvider>
  );
});

GoogleMap.displayName = "GoogleMap"; // Required for forwardRef

export default GoogleMap;
