import SearchFiltersFuel from "./filters/SearchFiltersFuel";
import SearchFiltersServices from "./filters/SearchFiltersServices";
import SearchFiltersStation from "./filters/SearchFiltersStation";
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
