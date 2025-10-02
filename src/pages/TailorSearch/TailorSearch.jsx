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

  const mapRef = useRef();

  function handleFilterResults(stations) {
    setFilteredStations(stations);
    setShowResults(true);
  }

  // Add this function
  const handleStationClick = (station) => {
    console.log("Station clicked!", station);
    
    // Extract coordinates from station data
    const lat = station.coordinates?.lat || station.latitude;
    const lng = station.coordinates?.lng || station.longitude;
    
    console.log("Extracted coordinates:", { lat, lng });
    console.log("Map ref current:", mapRef.current);

    if (lat && lng && mapRef.current) {
      console.log("Calling centerAndZoom...");
      mapRef.current.centerAndZoom(lat, lng, 16);
    } else {
      console.log("Missing data - lat:", lat, "lng:", lng, "mapRef:", mapRef.current);
    }
  };

  return (
    <>
      <Header />
      <HeroSearch />
      <div className={styles.mapWrapper}>
        <MapSearch 
          ref={mapRef} 
          stations={filteredStations} 
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
