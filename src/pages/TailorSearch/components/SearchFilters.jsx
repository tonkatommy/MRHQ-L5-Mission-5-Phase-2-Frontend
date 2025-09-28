import SearchButton from "./filters/SearchButton";
import SearchFiltersFuel from "./filters/SearchFiltersFuel";
import SearchFiltersServices from "./filters/SearchFiltersServices";
import SearchFiltersStation from "./filters/SearchFiltersStation";
import styles from "./SearchFilters.module.css";
import ToggleButton from "./ToggleButton";

function SearchFilters() {
  return (
    <div className={styles.container}>
      <SearchFiltersServices />
      <SearchFiltersFuel />
      <SearchFiltersStation />
      <SearchButton />
      <ToggleButton />
    </div>
  );
}

export default SearchFilters;
