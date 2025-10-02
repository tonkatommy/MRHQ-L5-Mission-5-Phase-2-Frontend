import { forwardRef } from "react";
import GoogleMap from "./GoogleMap";
import styles from "./MapSearch.module.css";

const MapSearch = forwardRef((props, ref) => {
  const { stations, userLocation, selectedStation, onStationSelect } = props;

  return (
    <div className={styles.container}>
      <GoogleMap
        ref={ref}
        stations={stations}
        userLocation={userLocation}
        selectedStation={selectedStation}
        onStationSelect={onStationSelect}
      />
    </div>
  );
});

MapSearch.displayName = "MapSearch";

export default MapSearch;
