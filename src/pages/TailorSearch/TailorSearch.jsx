import { useState } from "react";
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

  function handleFilterResults(stations) {
    setFilteredStations(stations);
    setShowResults(true);
  }

  return (
    <>
      <Header />
      <HeroSearch />
      <div className={styles.mapWrapper}>
        <MapSearch />
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
          <StationResults stations={filteredStations} isVisible={showResults} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TailorSearch;
