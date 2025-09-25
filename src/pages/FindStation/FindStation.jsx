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
        <StationCard />
      </main>
      <Footer />
    </>
  );
}

export default FindStation;
