// import CSS module for styling
import styles from "./StationCard.module.css";

const StationCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.title}>
            <h5 className={styles.stationName}>Z Stratford</h5>
            <h5 className={styles.stationAddress}>Cnr Broadway and Regan Street, Stratford</h5>
          </div>
          <div className={styles.openHours}>Open 24 Hours</div>
        </div>
        <div className={styles.fuelIndicators}>
          <div className={styles.fuelDiesel}>
            <img src="/public/images/z-energy-logo-small.png" alt="Z Energy Logo" />
          </div>
          <div className={styles.fuelUnleaded}>
            <img src="/public/images/z-energy-logo-small.png" alt="Z Energy Logo" />
          </div>
          <div className={styles.fuelPremium}>
            <img src="/public/images/z-energy-logo-small.png" alt="Z Energy Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationCard;
