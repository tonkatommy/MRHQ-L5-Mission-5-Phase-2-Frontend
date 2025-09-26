import { useState, useRef, useEffect } from "react";
import styles from "./SearchFiltersFuel.module.css";
import downArrow from "../../../assets/chevron-down.svg";

function SearchFiltersFuel() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select fuel type");
  const dropdownRef = useRef(null);

  const options = ["ZX Premium", "Z91 Unleaded", "Z Diesel"];

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
    <div className={styles.fuelContainer} ref={dropdownRef}>
      <label>Fuel type</label>
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
        <ul className={styles.fuelFilters}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                handleSelect(option);
              }}
              className={styles.fuelFiltersItems}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFiltersFuel;
