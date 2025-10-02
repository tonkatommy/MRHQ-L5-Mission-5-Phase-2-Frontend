import StationCard from "../../FindStation/components/StationCard";
import styles from "./StationResults.module.css";

function StationResults({ stations, isVisible }) {
  if (!isVisible || !stations || stations.length === 0) {
    return null;
  }

  // Function to map backend data to StationCard props
  const mapStationData = (station) => {
    return {
      stationName: station.name || station.stationName,
      stationAddress: station.address || station.stationAddress,
      openHours: station.openHours || "Open 24 Hours",
      fuelPrices: {
        diesel:
          station.selectedFuelPrice?.find((fuel) => fuel.type === "Z Diesel")
            ?.price || station.fuelPrices?.ZDiesel,
        unleaded:
          station.selectedFuelPrice?.find(
            (fuel) => fuel.type === "Z91 Unleaded"
          )?.price || station.fuelPrices?.Z91,
        premium:
          station.selectedFuelPrice?.find((fuel) => fuel.type === "ZX Premium")
            ?.price || station.fuelPrices?.ZPremium,
      },
      fuelTypes: {
        diesel: "D",
        unleaded: "91",
        premium: "96",
      },
      services: {
        lpg: station.services?.includes("LPG SWAP'n'GO") || false,
        food:
          station.services?.includes("Z Espress Coffee & Fresh Food") || false,
        carWash: station.services?.includes("Z2O carwash") || false,
        trailerHire: station.services?.includes("Trailer hire") || false,
      },
      moreInfoItems: station.services || [],
    };
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{stations.length} stations found</h3>
      </div>
      <div className={styles.stationsList}>
        {stations.map((station, index) => (
          <StationCard
            key={station._id || index}
            {...mapStationData(station)}
          />
        ))}
      </div>
    </div>
  );
}

export default StationResults;
