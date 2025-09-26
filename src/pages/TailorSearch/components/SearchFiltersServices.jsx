import { useState, useRef, useEffect } from "react";
import styles from "./SearchFiltersServices.module.css";
import downArrow from "../../../assets/chevron-down.svg";

function SearchFiltersServices() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select fuel type");
  const dropdownRef = useRef(null);

  const options = [
    "EV Charging",
    "Food & Coffee",
    "Services & Ameneties",
    "Payment",
    "Trucks",
  ];

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
    <div className={styles.servicesContainer} ref={dropdownRef}>
      <label>Services</label>
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
        <ul className={styles.servicesFilters}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                handleSelect(option);
              }}
              className={styles.servicesFiltersItems}
            >
              {option}
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFiltersServices;
