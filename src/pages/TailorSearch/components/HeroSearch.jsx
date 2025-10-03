import styles from "./HeroSearch.module.css";
import searchArrow from "../../../assets/SearchButtonVector.svg";
import currentLocationIcon from "../../../assets/current_location_icon.svg";

function HeroSearch({ onCurrentLocation, onLocationSearch }) {
  const handleCurrentLocationClick = () => {
    if (onCurrentLocation) {
      onCurrentLocation();
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const locationInput = document.getElementById("locationInput");
    const searchLocation = locationInput.value.trim();

    if (!searchLocation) {
      alert("Please enter a location to search");
      return;
    }

    console.log("Searching for location:", searchLocation);

    try {
      // Use Google Geocoding API to convert address to coordinates
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode(
        {
          address: searchLocation,
          componentRestrictions: {
            country: "NZ", // Restrict search to New Zealand only
          },
        },
        (results, status) => {
          if (status === "OK" && results[0]) {
            const location = results[0].geometry.location;
            const coordinates = {
              lat: location.lat(),
              lng: location.lng(),
            };

            console.log("Geocoded coordinates:", coordinates);

            // Call the location search callback with the coordinates
            if (onLocationSearch) {
              onLocationSearch(coordinates, searchLocation);
            }
          } else {
            console.error("Geocoding failed:", status);
            alert(
              "Could not find the location. Please try a different address or place name."
            );
          }
        }
      );


    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while searching for the location.");
    }
  };

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
      <div
        className={styles.currentLocation}
        onClick={handleCurrentLocationClick}
        style={{ cursor: "pointer" }}
      >
        <img src={currentLocationIcon}></img>
        <p>Or use my current location</p>
      </div>
    </div>
  );
}

export default HeroSearch;
