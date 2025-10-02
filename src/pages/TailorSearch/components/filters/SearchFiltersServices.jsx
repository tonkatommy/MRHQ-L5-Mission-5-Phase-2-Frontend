import { useState, useRef, useEffect } from "react";
import styles from "./SearchFiltersServices.module.css";
import downArrow from "../../../../assets/chevron-down.svg";

function SearchFiltersServices({ onSelectionChange, resetTrigger }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [expanded, setExpanded] = useState(null); // Track which parent item is expanded
  const dropdownRef = useRef(null);

  // Reset component state when resetTrigger changes
  useEffect(() => {
    if (resetTrigger > 0) {
      setSelectedOptions([]);
      setIsOpen(false);
      setExpanded(null);
    }
  }, [resetTrigger]);

  useEffect(() => {
    onSelectionChange?.(selectedOptions);
  }, [selectedOptions, onSelectionChange]);

  const options = {
    "EV Charging": [
      "EV Charging - Fast",
      "EV Charging - Ultra-Fast",
      "EV Charging - Fast &/or Ultra-Fast",
      "EV Charging - Coming Soon",
    ],
    "Food & Coffee": [
      "Pre-order Coffee",
      "Z Espress Coffee & Fresh Food",
      "Compostable Cups",
      "f'real",
    ],
    "Services & Ameneties": [
      "Trailer hire",
      "LPG SWAP'n'GO",
      "ATM",
      "Bathrooms",
      "A-Z Screen",
      "Super long hoses",
      "Z2O carwash",
    ],
    "Payment": ["Pay by plate", "Pay in app", "24/7 Pay at pump"],
    "Trucks": ["AdBlue Diesel Exhaust Fluid", "Fast fill Diesel lane"],
  };

  const toggleExpand = (option) => {
    setExpanded(expanded === option ? null : option);
  };

  const toggleSelect = (subOption) => {
    setSelectedOptions(
      (prev) =>
        prev.includes(subOption)
          ? prev.filter((opt) => opt !== subOption) //remove
          : [...prev, subOption] //add
    );
  };

  const removeOption = (subOption) => {
    setSelectedOptions((prev) => prev.filter((opt) => opt !== subOption));
  };

  const clearAll = (e) => {
    e.stopPropagation(); //prevent button toggle
    setSelectedOptions([]);
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
        className={`${styles.dropdownButton} ${isOpen ? styles.active : ""}`}
      >
        <div className={styles.selectedTags}>
          {/* Placeholder when nothing has been selected yet */}
          {selectedOptions.length === 0 && (
            <span className={styles.placeHolder}>
              {" "}
              Select services or ameneties
            </span>
          )}

          {/* Displays options which have been selected on the button */}
          {selectedOptions.map((opt) => (
            <span key={opt} className={styles.tag}>
              {opt}

              {/* Removes item from list when clicked */}
              <span
                className={styles.removeTag}
                onClick={(e) => {
                  e.stopPropagation();
                  removeOption(opt);
                }}
              >
                ×
              </span>
            </span>
          ))}
        </div>

        {/* Clears all options */}
        <div className={styles.clearAllButton}>
          {selectedOptions.length > 0 && (
            <span className={styles.clearAll} onClick={clearAll}>
              ×
            </span>
          )}
          <img src={downArrow} alt="toggle" />
        </div>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Nested dropdown */}
              {expanded === option && (
                <ul className={styles.nestedDropdown}>
                  {subOptions.map((subOption, subIndex) => (
                    <li
                      key={subIndex}
                      className={`${styles.nestedItems} ${
                        selectedOptions.includes(subOption)
                          ? styles.nestedItemsSelected
                          : ""
                      }`}
                      onClick={() => toggleSelect(subOption)}
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
