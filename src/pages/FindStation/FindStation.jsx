// Import CSS module for styling
import styles from "./FindStation.module.css";

// Import Header and Footer + other components
import Header from "../../sharedComponents/Header/Header";
import Footer from "../../sharedComponents/Footer/Footer";
import StationCard from "./components/StationCard";

function FindStation() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Find Station</h1>
        <p>Locate the nearest Z Energy station to you.</p>
        <StationCard
          stationName="Z Stratford"
          stationAddress="Cnr Broadway and Regan Street, Stratford"
          openHours="Open 24 Hours"
          fuelPrices={{ diesel: "2.05", unleaded: "2.35", premium: "2.55" }}
          fuelTypes={{ diesel: "D", unleaded: "91", premium: "96" }}
          services={{ lpg: true, food: true, carWash: false, trailerHire: true, showMore: true }}
        />
      </main>
      <Footer />
    </>
  );
}

export default FindStation;
