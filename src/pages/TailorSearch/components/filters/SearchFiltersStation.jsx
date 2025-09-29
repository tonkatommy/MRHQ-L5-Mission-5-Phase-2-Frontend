import { useState, useRef, useEffect } from "react";
import styles from "./SearchFiltersStation.module.css";
import downArrow from "../../../../assets/chevron-down.svg";

function SearchFiltersStation() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select station type");
  const dropdownRef = useRef(null);

  const options = ["Truck stop", "Service station"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Close dropdown if click outside area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.stationContainer} ref={dropdownRef}>
      <label>Station type</label>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selected}
        <img src={downArrow}></img>
      </button>

      {/* List options */}
      {isOpen && (
        <ul className={styles.stationFilters}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                handleSelect(option);
              }}
              className={styles.stationFiltersItems}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFiltersStation;
