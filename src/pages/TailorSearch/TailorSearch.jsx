import { useState } from "react";
import Header from "../../sharedComponents/Header/Header";
import Footer from "../../sharedComponents/Footer/Footer";
import HeroSearch from "./components/HeroSearch";
import MapSearch from "./components/MapSearch";
import SearchFilters from "./components/SearchFilters";
import styles from "./TailorSearch.module.css";

function TailorSearch() {
  const [toggleShown, setToggleShown] = useState(false);

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
          <SearchFilters onShowToggle={() => setToggleShown(true)} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TailorSearch;
