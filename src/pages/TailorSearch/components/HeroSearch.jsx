import styles from "./HeroSearch.module.css";
import searchArrow from "../../../assets/SearchButtonVector.svg";
import currentLocationIcon from "../../../assets/current_location_icon.svg";

async function handleSearch(e) {
  e.preventDefault();

  const locationInput = document.getElementById("locationInput");
  const searchLocation = locationInput.value;
  console.log(searchLocation);

  try {
    const response = await fetch("http://localhost:3000/find-station", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: searchLocation,
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function HeroSearch() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heroText}> Tailor Your Station Search</h2>
      <div className={styles.searchArea}>
        <label>Location</label>
        <form className={styles.searchBar} onSubmit={handleSearch}>
          <input
            placeholder="Please enter a Location / Station / Truck stop / Airstop"
            name="locationInput"
            id="locationInput"
          />
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
