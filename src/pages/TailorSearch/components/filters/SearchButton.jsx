import styles from "./SearchButton.module.css";

function SearchButton({ onClick }) {
  return (
    <button className={styles.filterButton} onClick={onClick}>
      Apply filters
    </button>
  );
}

export default SearchButton;
