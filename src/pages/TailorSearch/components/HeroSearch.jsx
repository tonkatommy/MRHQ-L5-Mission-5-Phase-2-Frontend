import styles from "./HeroSearch.module.css";
import searchArrow from "../../../assets/SearchButtonVector.svg";
import currentLocationIcon from "../../../assets/current_location_icon.svg";

function handleSearch(e) {
  e.preventDefault();
  console.log("Test");
}

function HeroSearch() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heroText}> Tailor Your Station Search</h2>
      <div className={styles.searchArea}>
        <label>Location</label>
        <form className={styles.searchBar} onSubmit={handleSearch}>
          <input placeholder="Please enter a Location / Station / Truck stop / Airstop" />
          <button className={styles.searchButton}>
            <img src={searchArrow}></img>
          </button>
        </form>
      </div>
      <div className={styles.currentLocation}>
        <img src={currentLocationIcon}></img>
        <p>Or use my current location</p>
      </div>
    </div>
  );
}

export default HeroSearch;
