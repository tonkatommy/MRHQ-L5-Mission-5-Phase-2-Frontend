import GoogleMap from "./GoogleMap";
import styles from "./MapSearch.module.css";

function handleSearch(e) {
  e.preventDefault();
  console.log("Test");
}

function MapSearch() {
  return (
    <div className={styles.container}>
      <GoogleMap /> 
    </div>
  );
}

export default MapSearch;
