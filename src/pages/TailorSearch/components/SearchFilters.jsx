import { useState } from "react";
import SearchButton from "./filters/SearchButton";
import SearchFiltersFuel from "./filters/SearchFiltersFuel";
import SearchFiltersServices from "./filters/SearchFiltersServices";
import SearchFiltersStation from "./filters/SearchFiltersStation";
import styles from "./SearchFilters.module.css";
import ToggleButton from "./ToggleButton";

function SearchFilters({ onShowToggle, onFilterResults }) {
  const [showToggleButton, setShowToggleButton] = useState(false);

  // Initial state for the filters
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedStationType, setSelectedStationType] = useState("");

  // Function to apply the filters
  const handleApplyFilters = async () => {
    // Collect data from the filters
    const filterData = {
      services: selectedServices, // Array of selected services
      fuelType: selectedFuelType, // String of selected fuel type
      stationType: selectedStationType, // String of selected station type
    };

    console.log("Sending filter data", filterData);

    // Send data to backend
    try {
      const response = await fetch(
        "http://localhost:3000/api/filter-stations",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(filterData),
        }
      );
      const data = await response.json();

      if (data.success) {
        console.log("Filtered stations", data.stations);
        console.log("Found", data.count, "matching stations");

        // Pass results to the parent component
        if (onFilterResults) {
          onFilterResults(data.stations);
        }
      } else {
        console.error("Filter error:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // Show toggle button
    setShowToggleButton(true);
    onShowToggle?.(); //to feed Toggle status over to TailorSearch component
  };

  return (
    <div
      className={`${styles.container} ${
        showToggleButton ? styles.containerWithToggle : styles.containerDefault
      }`}
    >
      <SearchFiltersServices onSelectionChange={setSelectedServices} />
      <SearchFiltersFuel onSelectionChange={setSelectedFuelType} />
      <SearchFiltersStation onSelectionChange={setSelectedStationType} />
      <SearchButton onClick={handleApplyFilters} />
      {showToggleButton && <ToggleButton />}
    </div>
  );
}

export default SearchFilters;
