import { forwardRef } from "react";
import GoogleMap from "./GoogleMap";
import styles from "./MapSearch.module.css";

const MapSearch = forwardRef((props, ref) => {
  const { stations, userLocation } = props;
  
  return (
    <div className={styles.container}>
      <GoogleMap ref={ref} stations={stations} userLocation={userLocation} />
    </div>
  );
});

MapSearch.displayName = "MapSearch";

export default MapSearch;
