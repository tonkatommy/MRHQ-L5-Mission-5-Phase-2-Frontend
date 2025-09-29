import { useState } from "react";
import styles from "./ToggleButton.module.css";
import ellipse from "../../../assets/Ellipse.svg";

function ToggleButton() {
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled((e) => !e);
  };

  return (
    <div className={styles.toggleButtonContainer}>
      <label>{toggled ? "Show prices" : "Hide prices"}</label>
      <button
        className={`${styles.buttonStyle} ${
          toggled ? styles.toggledButton : ""
        }`}
        onClick={handleToggle}
      >
        <img src={ellipse} />
      </button>
    </div>
  );
}

export default ToggleButton;
