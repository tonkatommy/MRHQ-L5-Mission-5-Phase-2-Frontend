import SearchButton from "./filters/SearchButton";
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
      <SearchButton />
    </div>
  );
}

export default SearchFilters;
