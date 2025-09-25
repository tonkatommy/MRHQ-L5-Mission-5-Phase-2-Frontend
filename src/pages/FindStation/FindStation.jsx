import Header from "../../sharedComponents/Header/Header";
import Footer from "../../sharedComponents/Footer/Footer";
import styles from "./FindStation.module.css";

function FindStation() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Find Station</h1>
        <p>Locate the nearest Z Energy station to you.</p>
      </main>
      <Footer />
    </>
  );
}

export default FindStation;