import { useEffect, useState, useMemo } from "react";
import { AdvancedMarker, Pin, useMap } from "@vis.gl/react-google-maps";

const GoogleMapsMarkers = (props) => {
  const map = useMap();
  const { stations } = props;
  const [allStationData, setAllStationData] = useState([]);
  const [zoom, setZoom] = useState(6);

  // Fetch all station data from backend (for initial display)
  useEffect(() => {
    const fetchStationData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/z-stations");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched all station data:", data);
        setAllStationData(data);
      } catch (error) {
        console.error("Error fetching station data:", error);
      }
    };

    fetchStationData();
  }, []);

  // Determine which stations to display
  const stationData = useMemo(() => {
    // If filtered stations are provided and not empty, use them
    if (stations && stations.length > 0) {
      console.log("Using filtered stations:", stations);
      return stations;
    }
    // Otherwise, show all stations
    console.log("Using all stations:", allStationData);
    return allStationData;
  }, [stations, allStationData]);

  // Listen to zoom changes
  useEffect(() => {
    if (!map) return;

    const listener = map.addListener("zoom_changed", () => {
      setZoom(map.getZoom() || 6);
    });

    return () => {
      google.maps.event.removeListener(listener);
    };
  }, [map]);

  // Helper function to get cluster radius based on zoom level
  const getClusterRadius = (zoomLevel) => {
    const baseRadius = 100; // Base radius in km
    return baseRadius / Math.pow(2, zoomLevel - 6);
  };

  // Helper function to calculate distance between two points
  const getDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Simple clustering algorithm based on zoom level
  const processedStations = useMemo(() => {
    if (!stationData.length) return [];

    // At high zoom levels, show all markers
    if (zoom >= 12) {
      return stationData.map((station) => ({
        ...station,
        isCluster: false,
        count: 1,
      }));
    }

    // At lower zoom levels, cluster nearby stations
    const clusters = [];
    const processed = new Set();
    const clusterRadius = getClusterRadius(zoom);

    stationData.forEach((station, index) => {
      if (processed.has(index)) return;

      const nearbyStations = [station];
      processed.add(index);

      // Find nearby stations
      stationData.forEach((otherStation, otherIndex) => {
        if (processed.has(otherIndex) || index === otherIndex) return;

        const distance = getDistance(
          station.coordinates.lat,
          station.coordinates.lng,
          otherStation.coordinates.lat,
          otherStation.coordinates.lng
        );

        if (distance <= clusterRadius) {
          nearbyStations.push(otherStation);
          processed.add(otherIndex);
        }
      });

      // Create cluster or individual marker
      if (nearbyStations.length > 1) {
        // Calculate cluster center
        const centerLat =
          nearbyStations.reduce((sum, s) => sum + s.coordinates.lat, 0) / nearbyStations.length;
        const centerLng =
          nearbyStations.reduce((sum, s) => sum + s.coordinates.lng, 0) / nearbyStations.length;

        clusters.push({
          _id: `cluster-${clusters.length}`,
          coordinates: { lat: centerLat, lng: centerLng },
          isCluster: true,
          count: nearbyStations.length,
          stations: nearbyStations,
          stationName: `${nearbyStations.length} Z Stations`,
        });
      } else {
        clusters.push({
          ...station,
          isCluster: false,
          count: 1,
        });
      }
    });

    return clusters;
  }, [stationData, zoom]);

  // Handle cluster click - zoom in to show individual stations
  const handleClusterClick = (cluster) => {
    if (!map || !cluster.isCluster) return;

    // Calculate bounds for all stations in cluster
    const bounds = new google.maps.LatLngBounds();
    cluster.stations.forEach((station) => {
      bounds.extend(station.coordinates);
    });

    // Fit map to cluster bounds
    map.fitBounds(bounds);
  };

  // Handle individual station click
  const handleStationClick = (station) => {
    console.log("Station clicked:", station);
    if (!map) return;
    if (!station.coordinates) return;
    console.log("marker clicked:", station.coordinates.toString());
    map.panTo(station.coordinates);
    // Add your custom behavior here
  };

  return (
    <>
      {processedStations.map((item) => (
        <AdvancedMarker
          key={item._id}
          position={item.coordinates}
          onClick={() => (item.isCluster ? handleClusterClick(item) : handleStationClick(item))}
        >
          {item.isCluster ? (
            // Cluster marker
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#F26522",
                border: "2px solid #FFF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "12px",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            >
              {item.count}
            </div>
          ) : (
            // Individual station marker
            <Pin background={"#F26522"} glyphColor={"#FFF"} borderColor={"#F26522"} scale={1.2} />
          )}
        </AdvancedMarker>
      ))}
    </>
  );
};

export default GoogleMapsMarkers;
