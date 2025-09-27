import { useState, useRef, useEffect } from "react";
import styles from "./SearchFiltersServices.module.css";
import downArrow from "../../../assets/chevron-down.svg";

function SearchFiltersServices() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select fuel type");
  const [expanded, setExpanded] = useState(null); // Track which parent item is expanded
  const dropdownRef = useRef(null);

  const options = {
    "EV Charging": [
      "EV Charging - Fast",
      "EV Charging - Ultra Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "EV Charging - Coming Soon",
    ],
    "Food & Coffee": [
      "Pre-order coffee",
      "Z-Espresso coffee & fresh food",
      "Compostable cups",
      "F'real",
    ],
    "Services & Ameneties": [
      "Trailer hire",
      "LPG SWAP n' GO",
      "ATM",
      "Bathroom",
      "A-Z Screens",
      "Super long hoses",
      "Z20 Carwash",
    ],
    "Payment": ["Pay by plate", "Pay in App", "24/7 Pay pump"],
    "Trucks": ["AdBlue Diesel Exhaust Fluid", "Fast fill Diesel lane"],
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    setExpanded(null);
  };

  const toggleExpand = (option) => {
    setExpanded(expanded === option ? null : option);
  };

  // Close dropdown if click outside area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setExpanded(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.servicesContainer} ref={dropdownRef}>
      <label>Services</label>
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selected}
        <img src={downArrow}></img>
      </button>

      {/* Parent options */}
      {isOpen && (
        <ul className={styles.servicesFilters}>
          {Object.entries(options).map(([option, subOptions], index) => (
            <li key={index} className={styles.servicesFiltersItems}>
              {/* Parent option */}
              <div
                className={`${styles.optionHeader} ${
                  expanded === option ? styles.open : ""
                }`}
                onClick={() => toggleExpand(option)}
              >
                <span className={styles.optionLabel}>{option}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    // stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              {/* Nested dropdown */}
              {expanded === option && (
                <ul className={styles.nestedDropdown}>
                  {subOptions.map((subOption, subIndex) => (
                    <li
                      key={subIndex}
                      className={styles.nestedItems}
                      onClick={() => handleSelect(subOption)}
                    >
                      <span className={styles.optionLabel}>{subOption}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFiltersServices;
