import Header from "../../sharedComponents/Header/Header";
import Footer from "../../sharedComponents/Footer/Footer";
import styles from "./TailorSearch.module.css";

function TailorSearch() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Tailor Search</h1>
        <p>Customize your search preferences.</p>
      </main>
      <Footer />
    </>
  );
}

export default TailorSearch;