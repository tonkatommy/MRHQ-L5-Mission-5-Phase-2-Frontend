import { useState } from "react";
import SearchButton from "./filters/SearchButton";
import SearchFiltersFuel from "./filters/SearchFiltersFuel";
import SearchFiltersServices from "./filters/SearchFiltersServices";
import SearchFiltersStation from "./filters/SearchFiltersStation";
import styles from "./SearchFilters.module.css";
import ToggleButton from "./ToggleButton";

function SearchFilters({ onShowToggle }) {
  const [showToggleButton, setShowToggleButton] = useState(false);
  const handleShowToggleButton = () => {
    setShowToggleButton(true);
    onShowToggle?.(); //to feed Toggle status over to TailorSearch component
  };
  return (
    <div
      className={`${styles.container} ${
        showToggleButton ? styles.containerWithToggle : styles.containerDefault
      }`}
    >
      <SearchFiltersServices />
      <SearchFiltersFuel />
      <SearchFiltersStation />
      <SearchButton onClick={handleShowToggleButton} />
      {showToggleButton && <ToggleButton />}
    </div>
  );
}

export default SearchFilters;
