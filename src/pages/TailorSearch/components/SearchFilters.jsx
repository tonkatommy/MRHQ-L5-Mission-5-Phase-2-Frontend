import SearchFiltersFuel from "./SearchFiltersFuel";
import SearchFiltersServices from "./SearchFIltersServices";
import SearchFiltersStation from "./SearchFiltersStation";
import styles from "./SearchFilters.module.css";

function SearchFilters() {
  return (
    <div className={styles.container}>
      <SearchFiltersServices />
      <SearchFiltersFuel />
      <SearchFiltersStation />
    </div>
  );
}

export default SearchFilters;
