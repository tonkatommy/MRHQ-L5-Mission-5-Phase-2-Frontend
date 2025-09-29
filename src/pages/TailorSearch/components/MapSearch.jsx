import GoogleMap from "./GoogleMap";
import styles from "./MapSearch.module.css";

function MapSearch() {
  return (
    <div className={styles.container}>
      <GoogleMap />
    </div>
  );
}

export default MapSearch;
