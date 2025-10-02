import { useState, useRef } from "react";
import Header from "../../sharedComponents/Header/Header";
import Footer from "../../sharedComponents/Footer/Footer";
import HeroSearch from "./components/HeroSearch";
import MapSearch from "./components/MapSearch";
import SearchFilters from "./components/SearchFilters";
import StationResults from "./components/StationResults";
import styles from "./TailorSearch.module.css";

function TailorSearch() {
  const [toggleShown, setToggleShown] = useState(false);
  const [filteredStations, setFilteredStations] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [userLocation, setUserLocation] = useState(null); // Add user location state
  const [selectedStation, setSelectedStation] = useState(null); // Add selected station state

  const mapRef = useRef();

  function handleFilterResults(stations) {
    setFilteredStations(stations);
    setShowResults(true);
  }

  // Add this function
  const handleStationClick = (station) => {
    console.log("Station clicked!", station);

    // Set as selected station for directions
    setSelectedStation(station);

    // Extract coordinates from station data
    const lat = station.coordinates?.lat || station.latitude;
    const lng = station.coordinates?.lng || station.longitude;

    console.log("Extracted coordinates:", { lat, lng });
    console.log("Map ref current:", mapRef.current);

    if (lat && lng && mapRef.current) {
      console.log("Calling centerAndZoom...");
      mapRef.current.centerAndZoom(lat, lng, 15);
    } else {
      console.log(
        "Missing data - lat:",
        lat,
        "lng:",
        lng,
        "mapRef:",
        mapRef.current
      );
    }
  };

  // Function to handle station selection (both from marker click and card click)
  const handleStationSelect = (station) => {
    console.log("Station selected for directions:", station);
    setSelectedStation(station);
  };

  // Add current location handler
  const handleCurrentLocation = () => {
    console.log("Getting current location...");

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        console.log("Current location:", { lat, lng });

        // Set user location state
        setUserLocation({ lat, lng });

        if (mapRef.current) {
          // Center and zoom to user's location
          mapRef.current.centerAndZoom(lat, lng, 15);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Location access denied by user.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("Location request timed out.");
            break;
          default:
            alert("An unknown error occurred while retrieving location.");
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  // Add location search handler for geocoding
  const handleLocationSearch = (coordinates, locationName) => {
    console.log("Location search result:", coordinates, locationName);

    // Set the geocoded location as user location
    setUserLocation(coordinates);

    if (mapRef.current) {
      // Center and zoom to the searched location
      mapRef.current.centerAndZoom(coordinates.lat, coordinates.lng, 15);
    }
  };

  return (
    <>
      <Header />
      <HeroSearch
        onCurrentLocation={handleCurrentLocation}
        onLocationSearch={handleLocationSearch}
      />
      <div className={styles.mapWrapper}>
        <MapSearch
          ref={mapRef}
          stations={filteredStations}
          userLocation={userLocation}
          selectedStation={selectedStation}
          onStationSelect={handleStationSelect}
        />
        <div
          className={`${styles.searchFiltersWrapper} ${
            toggleShown ? styles.withToggle : styles.defaultSpacing
          }`}
        >
          <SearchFilters
            onShowToggle={() => setToggleShown(true)}
            onFilterResults={handleFilterResults} // Prop to pass values
          />
        </div>
        <div className={styles.stationResultsWrapper}>
          <StationResults
            stations={filteredStations}
            isVisible={showResults}
            onStationClick={handleStationClick}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TailorSearch;
