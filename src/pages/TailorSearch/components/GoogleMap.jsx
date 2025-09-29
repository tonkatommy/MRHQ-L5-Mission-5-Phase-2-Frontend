import { useEffect, useRef } from "react";

function GoogleMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;

    async function initMap() {
      // Load the required libraries
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker"
      );

      // Create the map
      map = new Map(mapRef.current, {
        center: { lat: -42.48101284616512, lng: 172.16160268498984 },
        zoom: 5.5,
        mapId: "DEMO_MAP_ID",

        // Disable default UI
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.LARGE,
        },
      });

      // Add a marker
      new AdvancedMarkerElement({
        map,
        position: { lat: -42.48101284616512, lng: 172.16160268498984 },
        title: "My location",
      });
    }

    initMap();
  }, []);

  return <div ref={mapRef} style={{ height: "100vh", width: "100%" }} />;
}

export default GoogleMap;
