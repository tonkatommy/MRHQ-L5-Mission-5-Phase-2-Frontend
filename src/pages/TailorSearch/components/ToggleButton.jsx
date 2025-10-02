import styles from "./ToggleButton.module.css";
import ellipse from "../../../assets/Ellipse.svg";

function ToggleButton({ toggled, onToggle }) {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(!toggled);
    }
  };

  return (
    <div className={styles.toggleButtonContainer}>
      <label>{toggled ? "Hide prices" : "Show prices"}</label>
      <button
        className={`${styles.buttonStyle} ${toggled ? styles.toggledButton : ""}`}
        onClick={handleToggle}
      >
        <img src={ellipse} alt="Toggle" />
      </button>
    </div>
  );
}

export default ToggleButton;
